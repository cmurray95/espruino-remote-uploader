---
layout: default
parent: bangle
grand_parent: Demos
nav_order: 3
title: flappy demo
---

<script src="https://unpkg.com/remote-uploader@3.0.0/dist/remote.min.js"></script>

# Flappy Demo

<img src="../../media/flappy.gif"/>

This demo will allow you to play a game on your bangle device. The bangle.js code for this demo can be found <a href="https://github.com/espruino/BangleApps/blob/master/apps/flappy/app.js">here</a>. This program was developed by <a href="https://github.com/gfwilliams">Gordon Williams</a>. This demo serves to demonstrate how the remote uploader tool can be used to easily
upload open source projects to a Espruino device, without any external services.

To use the demo, connect to a device then select upload using the buttons below. 

<button onclick="connect()" class="btn"> connect </button>
<button onclick="upload()" class="btn"> upload </button>

<p></p>

<div id="status"> </div>

<p></p>

Once uploaded, you can control the game by tapping on the devices touchscreen.

<script>
    let connection = new Remote();

    function connect() {
        connection.connect();
    }

    function upload() {
        let url = "https://raw.githubusercontent.com/espruino/BangleApps/master/apps/flappy/app.js";

        connection.upload(url).then(success => {
            if(success){
                document.getElementById("status").innerHTML = "Upload succesful!";
            } else {
                document.getElementById("status").innerHTML = "Upload failed!";
            }
        })
    }
</script>