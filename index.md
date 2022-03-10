## Espruino Remote Uploader Tool
This tool is designed to provide developers a method of downloading code to any [espruino](https://espruino.com/) device. The tool is available both as an NPM package, or as a seperate javascript library. 

# Installation

The package can be installed via npm using:

`npm i remote-uploader --save`

or by including the following script tag in your html:

`<script src="https://unpkg.com/remote-uploader@2.2.1/dist/remote.min.js"></script>`

# Usage

To create a new connection:

```
let connection = new Remote();
connection.connect();
```

To upload code to a connected device:

```
connection.upload(url).then(result => {
    if(result){
        //...
    } else {
        //...
    }
})
```

Additionally, you can specify true to upload code directly to flash storage (only available on certain devices):
```
connection.upload(url,true).then(result => {
    if(result){
        //...
    } else {
        //...
    }
})
```

Retrieve device type (E.g. pixl, bangle, puck):
```
connection.getDeviceType().then(result => {
    //...
})
```
You can retrieve code stored on the device using:
```
connection.dump().then((result) => {
    //...
})
```

To reset a connection:

```
connection.reset();
```

Disconnect:

```
connection.disconnect();
```
