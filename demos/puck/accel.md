---
layout: default
parent: puck
grand_parent: Demos
nav_order: 3
title: accelerometer demo
---

<script src="https://unpkg.com/remote-uploader@3.0.0/dist/remote.min.js"></script>

# Accelerometer Demo

<img src="../../media/accel.gif"/>

The following demo demonstrates the simplest usecase of the remote-uploader tool: retrieving code from a remote source, and writing code to the device. For this example, we will be writing to the pucks flash storage. 

The puck.js code for this demo can be found <a href="https://github.com/cmurray95/Dissertation/blob/main/src/demos/accel-test.js">here</a>.

To use the demo, connect to a device then select upload using the buttons below. Once the upload is complete, simply rotate the puck device upside down to activate the green LED.

<button onclick="connect()" class="btn"> connect </button>
<button onclick="upload()" class="btn"> upload </button>
<p></p>

<div id="status"></div>

<script>
    let connection = new Remote();

    function connect() {
        connection.connect();
    }

    function upload() {
    let url = "https://raw.githubusercontent.com/cmurray95/Dissertation/main/src/demos/accel-test.js";

    connection.upload(url, true).then(success => {
        if(success){
            document.getElementById("status").innerHTML = "Upload succesful!";
        } else {
            document.getElementById("status").innerHTML = "Upload failed!";
        }
    })
}
</script>