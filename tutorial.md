---
layout: default
title: Tutorial
nav_order: 2
---

# Tutorial

This tutorial will demonstrate an example usage of the remote uploader tool. We will use the uploader to upload a sample program to a 
<a href="https://www.espruino.com/Puck.js"> puck.js </a> device. The program we will be uploading can be found <a href="https://raw.githubusercontent.com/cmurray95/Dissertation/main/src/demos/colour-test.js">here</a> and simply allows a user to enable the devices LEDs.

Despite being targetted at puck.js devices, this steps taken in this tutorial can be replicated with any device, as long as the
code being uploaded is valid for that device.

A finished demo of this tutorial is available [here](https://cmurray95.github.io/espruino-remote-uploader/demos/puck/colour.html).

## Requirements

This tutorial requires the following:

- Access to a puck.js device
- Access to a web bluetooth compatible device/browser

## Setup

Start by creating a html file and add the following:

```js
<head>
    <script src="https://unpkg.com/remote-uploader@3.0.0/dist/remote.min.js"></script>
</head>
```

Add the following buttons to the page:

```js
<body>
    <button onclick="connect()"> connect </button>
    <button onclick="upload()"> upload </button>
```



The connect button is used to establish a connection with the puck device, and the upload button will be used to send code to the device.

## Creating a Connection

To establish a connect with the device, add the following javascript code:

```js
    <script>
    // Creates a new remote object.
    let connection = new Remote();

    function connect() {
        // Establishes connection with device
        connection.connect();
    }
```

Here, we begin by creating a new remote object which is used to open a connection between the browser and the device.


## Uploading to the device

```js
    function upload() {
        let url = "https://raw.githubusercontent.com/cmurray95/Dissertation/main/src/demos/colour-test.js";

        // Retrieve code and write to devices flash memory
        connection.upload(url, true).then(success => {
            if(success){
                window.location.replace("https://cmurray95.github.io/Dissertation/src/demos/colour-test.html");
            } else {
                alert("Upload Failed! Please try again");
            }
        })
    }
    </script>
</body>
```

Once connected, we use connection.upload to retrieve code stored at a remote url, then write that code to the connected device. 
By passing in "true", the uploader will write the code to the devices flash memory. If we simply wished to write to RAM, we can ommit this flag.

After a delay, the upload method will return true if the upload was succesful, false if it failed. If succesful, we then redirect the user to a page containing
interactive buttons allowing the user to interactive with the device.
