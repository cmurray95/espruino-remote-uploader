---
layout: default
parent: pixl
grand_parent: Demos
nav_order: 3
title: dino demo
---

<script src="https://unpkg.com/remote-uploader@3.0.0/dist/remote.min.js"></script>

# Dino Demo

<img src="../../media/dino.gif"/>

This demo will allow you to play a game on your pixl device. The pixl.js code for this demo can be found <a href="https://github.com/cmurray95/Dissertation/blob/main/src/demos/pixl-demo/dinosaur_interactive.js">here</a>. The code has been modified from <a href="https://github.com/espruino/EspruinoApps/blob/master/apps/trex/app.js"> this application </a> such that it can now be controlled from a web browser.

To use the demo, connect to a device then select upload using the buttons below. If the upload is succesful, buttons will appear allowing you to control the game from this page.

<button onclick="connect()" class="btn"> Connect </button>
<button onclick="upload()" class="btn"> Upload </button>
<button onclick="uploadFlash()" class="btn"> Upload to Flash </button>

<p></p>

<div id="controller" style="visibility:hidden">
  <button onclick="jump()" class="btn"> Jump! </button>
  <button onclick="restart()" class="btn"> Restart </button>
  <p></p>
</div>

<script>
    let connection = new Remote();

    function connect() {
        connection.connect();
    }

    function upload() {
        let url = "https://raw.githubusercontent.com/cmurray95/Dissertation/main/src/demos/pixl-demo/dinosaur_interactive.js";
        connection.upload(url).then(success => {
            if(success){
                document.getElementById("controller").style.visibility = "visible";
            } else {
                alert("Upload Failed! Please try again");
            }
        })
    }

     function uploadFlash() {
        let url = "https://raw.githubusercontent.com/cmurray95/Dissertation/main/src/demos/pixl-demo/dinosaur_interactive.js";
        connection.upload(url, true).then(success => {
            if(success){
                document.getElementById("controller").style.visibility = "visible";
            } else {
                alert("Upload Failed! Please try again");
            }
        })
    }

    function jump() {
        connection.call("jump();");
    }

    function restart() {
        connection.call("restart();");
    }
</script>