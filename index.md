---
layout: default
title: Getting Started
nav_order: 1
---

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

```js
<script src="https://unpkg.com/remote-uploader@3.0.0/dist/remote.min.js"></script>
```

## Usage

### Creating a connection
To create a new connection:

```js
let connection = new Remote();
connection.connect();
```

### Uploading code to the device
To upload code to a connected device. Important to note that the upload function will have a delay before returning whilst code is being written to the device:

```js
connection.upload(url).then(success => {
    if(success){
        //...
    } else {
        //...
    }
})
```

Additionally, you can specify true to upload code directly to flash storage (flash uploading does not work for bangle devices):
```js
connection.upload(url,true).then(success => {
    if(success){
        //...
    } else {
        //...
    }
})
```

### Identifying a device
Retrieve device type (e.g. pixl, bangle, puck):
```js
connection.getDeviceType().then(result => {
    //...
})
```

### Reading code from device
You can retrieve code stored on the device using:
```js
connection.dump().then((result) => {
    //...
})
```

### Reset a devices memory
To reset the device (removes all code currently stored on the device):
```js
connection.reset();
```

### Disconnecting a device
To disconnect the device from the current webpage:
```js
connection.disconnect();
```

### Calling functions from the device
You can execute methods written to the device using:

```js
connection.call(foo)
```

where foo is a string representing the function being called on the device. For example, to call foo you would use:

```js
connection.call("foo();");
```

### Retrieving data from the device
You can retrieve a value from the device using:
```js
connection.eval(foo).then((res => {
    //...
}))
```

Where foo is a string representing the function being called on the device. Returns a promise containing resulting value.
