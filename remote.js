import uart from "espruino-ble-uart";

export default class Remote { 
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
        this.#getRawCode(url).then((raw) => {
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
            }
        });
        let success = false;
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

