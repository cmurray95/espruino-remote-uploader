# espruino-remote-uploader

Allows for code to be uploaded remotely to Espruino hardware devices from a web browser.

# Installation

The package can be installed via npm using:

`npm i remote-uploader --save`

Alternatively, you can include the following script tag:

`<script src="https://unpkg.com/remote-uploader@2.0.0/dist/remote.min.js"></script>`

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

Additionally, you can specify true to upload code directly to flash storage (flash uploading does not work for bangle devices):
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

