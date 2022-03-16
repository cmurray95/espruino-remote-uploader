# espruino-remote-uploader

This tool allows for code to be uploaded remotely to Espruino hardware devices from a web browser. 
The uploader works by fetching a file containing valid espruino code, then writes to a connected espruino device
using the <a href="https://www.espruino.com/UART.js"> UART.js </a> library. 

The uploader can write to both flash or RAM storage, and will check code currently stored on the device to prevent redundent writes.

This tool relies upon web bluetooth to work, and as such requires a supported device/browser to work. You can find a list of supported browsers
<a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API#browser_compatibility">here</a>. 

Source code for the uploader is available <a href="https://github.com/cmurray95/espruino-remote-uploader">here</a>

## Installation

The package can be installed via npm using:

`npm i remote-uploader --save`

Alternatively, you can include the following script tag:

`<script src="https://unpkg.com/remote-uploader@2.5.0/dist/remote.min.js"></script>`

## Usage

To create a new connection:

```
let connection = new Remote();
connection.connect();
```

To upload code to a connected device. Important to note that the upload function will have a delay before returning whilst code is being written to the device:

```
connection.upload(url).then(success => {
    if(success){
        //...
    } else {
        //...
    }
})
```

Additionally, you can specify true to upload code directly to flash storage (flash uploading does not work for bangle devices):
```
connection.upload(url,true).then(success => {
    if(success){
        //...
    } else {
        //...
    }
})
```

Retrieve device type (e.g. pixl, bangle, puck):
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

To reset the device (removes all code currently stored on the device):

```
connection.reset();
```

Disconnect:

```
connection.disconnect();
```

When writing code to a device using upload(), the remote-uploader will wait for a set time before verifying if the write was succesful or not.
The amount of time taken to write to a device can vary heavily depending the size of the upload file, and the device being written to. By default the delay is set to 10 seconds,
however users can override this using:

```
connection.delay(val)
```

where val is a time in miliseconds. Be aware that issues may occur when using the delay value is too short.