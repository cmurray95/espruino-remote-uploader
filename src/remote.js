import uart from "espruino-ble-uart";
import md5 from "md5";

export class Remote { 
    constructor(){
        this.UART = uart;
        this.connected = false;
    }
    
    /**
     * Connect to device 
     * @returns true if connection was succesful
     */
    connect(){
        // Initialize connection and clear REPL
        this.UART.write("\x03", () => {
                this.connected = true;
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
        let device = await this.getDeviceType();
        // Force flash if bangle detected
        if (device == "BANGLEJS") {
            flash = false;
        }
        let success = false;
        await this.#getRawCode(url).then(async (raw) => {
            // Compare code on device with code to be uploaded
            this.dump().then((res) => {
              res = res.split("// Code saved with E.setBootCode");
              // If code exists on device already, skip upload process
              if(md5(raw) == md5(res[1])){
                success = true;
                return;
              }
            })
            // Reset ram before uploading
            this.reset();
            if(!flash && success != true){
                this.UART.write(raw);
            // Write to Flash Storage - This method does not currently work for pixl devices due to the way graphics are represented using string literals
            } else if(success != true && device != "PIXLJS") {
                this.UART.write(`E.setBootCode(\`${raw}\`,true);\n`);
                // Load into RAM
                this.UART.write("load();\n");
              // Flash storage for PIXL and misc devices
            } else if (success != true){
                this.UART.write(raw);
                success = await this.#checkStatus();
                this.UART.write("save();\n");
                // Load into RAM
                this.UART.write("load();\n");
                
            }
        });
        if(success != true){
            await this.#checkStatus().then(result => {
                success = result;
            });
        }
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
     * Check if connection is still available
     * @returns true if connected
     */
    isConnected(){
        return this.connected;
    }

    /**
     * 
     * @returns String containing device name
     */
    async getDeviceType(){
        if(!this.connected){
            this.connect();
        }
        let device = await this.eval('process.env.BOARD');
        return device;
    }
  
    /**
     * 
     * @returns promise containing code stored on device
     */
    async dump() {
        if(!this.connected) {
            this.connect();
        };
        // Retrieve code stored on device
        let str = await this.eval('E.dumpStr()');
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
     * Write checksum to device
     * @returns checksum
     */
    #writeStatus() {
        // Generate checksum
        let val = Math.floor(Math.random() * 100);
        let code = `function checkUploadStatus(){return '${val}';}\n`;
        this.UART.write(code);
        return val;
    }
  
    /**
     * Check if code upload succeeded
     * @returns promise containing boolean indicating if code was uploaded succesfully
     */
    async #checkStatus() {
        let checksum = this.#writeStatus();
        // comparator
        let cmp = await this.eval('checkUploadStatus()');
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
     * @returns promise containing value returned by the device
     */
    eval(func) {
        const promise = new Promise((res, rej) => {
            let callback = ((data) =>  {
                res(data)
            });
            // Call func on device, and then resolve result 
            this.UART.eval(func, callback)
        }).catch((e) => {
            throw Error(e);
        });
        // Return promise containing evaluated data
        return promise;
    }
  }