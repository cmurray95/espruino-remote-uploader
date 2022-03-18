import uart from "espruino-ble-uart";
import md5 from "md5";

export class Remote { 
    constructor(){
        this.UART = uart;
        this.connected = false;
        // Delay determines how long the checkStatus() function waits before attempting to verify upload status
        this.delay = 8000;
    }
    
    /**
     * Connect to device 
     */
    connect(){
        // Initialize connect and clear REPL
        this.UART.write("\x03", (err) => {
            if(!err){
                this.connected = true;
            }
            else {
                throw Error(err);
            }
        });
    }
  
    /**
     * 
     * @param {String} url link containing code to be uploaded 
     * @param {Boolean} flash Chooses which memory to write to. Flash writing does not work on bangle.
     * @returns promise indicating if upload was succesful
     */
    async upload(url, flash) {
        if(!this.connected) {
            this.connect();
        };
        let device = "";
        // Force flash if bangle detected
        await this.getDeviceType().then((res) =>{
          if(res == "BANGLEJS"){
            flash = false;
          }
          device = res;
        });
        let success = false;
        await this.#getRawCode(url).then((raw) => {
            // Compare code on device with code to be uploaded
            this.dump().then((res) => {
              res = res.split("// Code saved with E.setBootCode");
              // If code exists on device already, skip upload process
              if(md5(raw) == md5(res[1])){
                success = true;
              }
            })
            // Reset ram before uploading
            this.reset();
            if(!flash && success != true){
                this.UART.write(raw);
            // Write to Flash Storage - This method does not work for pixl devices due to the way graphics are represented as string literals
            } else if(success != true && device != "PIXLJS") {
                this.UART.write(`E.setBootCode(\`${raw}\`,true);\n`);
                // Load into RAM
                this.UART.write("load()\n");
            } else if (success != true){
                raw += "save();\n";
                this.UART.write(raw);
                // Load into RAM
                this.UART.write("load()\n");
            }
        });
        await this.#checkStatus().then(result => {
            success = result;
        });
        return success;
    }
  
    /**
     * Resets device removing currently stored code
     */
     reset() {
        if(!this.connected) {
            this.connect();
        };
        this.UART.write("reset(true);\n");
    }
  
    /**
     * Disconnect device
     */
    disconnect() {
        if(!this.connected) {
            this.connect();
        };
        this.UART.close();
        this.connected = false;
    }
  
    /**
     * 
     * @returns String containing device name
     */
    async getDeviceType(){
        if(!this.connected){
            this.connect();
        }
        let device = ""
        this.UART.eval('process.env.BOARD', (d) => {
            if(d){
                device = d;
            }
        });
        await this.#halt(200);
        return device;
    }
  
    /**
     * 
     * @returns code stored on device
     */
    async dump() {
        if(!this.connected) {
            this.connect();
        };
        let str = "";
        // Retrieve code stored on device
        this.UART.eval('E.dumpStr()', (t,err) => {
            if(err){
                throw Error(err);
            }
            str = t;
          }); 
        await this.#halt(5000);
        return str;
    }
  
    /**
     * 
     * @param {String} url link to raw github file containing code.
     * @returns promise containing code as a string
     */
     async #getRawCode(url) {
        const res = await fetch(url).then((response) => {
            // Ensure url is valid
            if(!response.ok){
                throw new Error(response.status);
            }
            return response;
        });
        // Fetch failed
        if(!res){
            throw new Error("Fetch failed!");
        }
        let data = await res.text();
        data = data + "\n";
        return data;
    }
  
    /**
     * Delay execution
     * @param {Timer} ms 
     * @returns 
     */
    #halt(ms) {
        return new Promise(res => setTimeout(res, ms));
      }
  
    /**
     * Write checksum to device
     * @returns checksum
     */
    #writeStatus() {
        // Generate checksum
        let val = Math.floor(Math.random() * 100);
        let code = `function check(){return '${val}';}\n`;
        this.UART.write(code);
        return val;
    }
  
    /**
     * Delay execution of code while espruino device performs an action. Default delay is 10 seconds.
     * Setting this to be too short may cause errors writing/reading from devices 
     * @param {Int} delay sets delay time in miliseconds 
     */
    setDelay(delay) {
        this.delay = delay;
    }

    /**
     * Check if code upload succeeded
     * @returns true if code was uploaded succesfully
     */
    async #checkStatus() {
        // comparator
        let cmp;
        let checksum = this.#writeStatus();
        this.UART.eval('check()', (t,err) => {
            if(err){
                throw Error(err);
            }
            cmp = t;
        });
        // Wait for eval to finish
        await this.#halt(this.delay);
        return cmp == checksum;
    }

    /**
     * Takes a function as a string and calls that function on the device
     * @param {String} func function to be called on device
     */
    call(func) {
        func += "\n";
        this.UART.write(func);
    }

    /**
     * 
     * @param {String} func function to be called on the device
     * @param {Int} delay time in miliseconds to wait for value to be returned. Setting this too low may result in errors. Default wait time is 500ms
     * @returns value returned by the device
     */
     async eval(func, delay = 500) {
        let val = "";
        // Attempt to retrieve value from device
        this.UART.eval(func, (res, err) => {
            if(err) {
                throw Error(err);
            }
            val = res
        })
        // Wait for eval to complete
        await this.#halt(delay);
        return val;
    }
  }