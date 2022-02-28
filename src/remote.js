import uart from "espruino-ble-uart";
import md5 from "md5";

export class Remote { 
    constructor(){
        this.UART = uart;
        this.connected = false;
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
     * @param {Boolean} flash Chooses which memory to write to
     * @returns promise indicating if upload was succesful
     */
    async upload(url, flash) {
        if(!this.connected) {
            connect();
        };
        let raw = this.#getRawCode(url).then((raw) => {
            return raw;
        });
        
        // Avoid duplicate uploads
        if(this.#compareHash(raw)){
            return true;
        }
    
        if(!flash){
            reset();
            this.UART.write(raw);
        } else {
            // Strip newlines
            raw = raw.replace(/(\r\n|\n|\r)/gm, "")
            // Write to Flash Storage
            this.UART.write(`E.setBootCode("${raw}",1);\n`);
            // Load into RAM
            this.UART.write("load()\n");
            return this.#compareHash(raw);
        }

        let success = this.#compareHash(raw);
        return success;
    }

    /**
     * Resets device removing currently stored code
     */
     reset() {
        if(!this.connected) {
            connect();
        };
        this.UART.write("reset(true);\n");
    }

    /**
     * Disconnect device
     */
    disconnect() {
        if(!this.connected) {
            connect();
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
            connect();
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
            connect();
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
     * 
     * @param {String} code to be compared with flash storage
     * @returns True if code on device is same as code to be uploaded
     */
    #compareHash(code){
         // Retrieve Device Code
         let deviceCode;
         this.dump().then(result => {
             deviceCode = result;
         });

         // Split to find flash memory code
         let arr = deviceCode.split('//Code set with E.setBootCode');

         console.log(md5(code.replace(/(\r\n|\n|\r)/gm, "")));
         console.log(md5(arr[1]));
         return (md5(code.replace(/(\r\n|\n|\r)/gm, "") == md5(arr[1])));
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
     * Check if code upload succeeded
     * @returns true if code was uploaded succesfully
     */
    async #checkStatus() {
        this.#writeStatus();
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
        await this.#halt(2000);
        return cmp == checksum;
    }
}
