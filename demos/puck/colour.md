---
layout: default
parent: puck
grand_parent: Demos
nav_order: 3
title: colour demo
---

<script src="https://unpkg.com/remote-uploader@2.4.0/dist/remote.min.js"></script>
<script src="https://www.puck-js.com/puck.js"></script>

# Colour Demo

This demo will allow you to enable the LEDs on a puck.js device. The puck.js code for this demo can be found <a href="https://github.com/cmurray95/Dissertation/blob/main/src/demos/colour-test.js">here</a>.

To use the demo, connect to a device then select upload using the buttons below. If the upload was succesful, buttons will appear allowing you to activate the devices LEDs.

<button onclick="connect()" class="btn"> connect </button>
<button onclick="upload()" class="btn"> upload </button>

<p></p>

<div id="leds" style="visibility:hidden">
  <button onclick="Puck.write('red();\n');" class="red"></button> 
  <p></p>
  <button onclick="Puck.write('blue();\n');" class="blue"></button> 
  <p></p>
  <button onclick="Puck.write('green();\n');" class="green"></button>
   <p></p>
  <button onclick="Puck.write('clear();\n')" class="btn">Reset LEDs</button>

  <p></p>
   The <a href="https://www.puck-js.com/puck.js">puck.js library</a> is used to call the functions written to the device.
</div>

<script>
    let connection = new Remote();

    function connect() {
        connection.connect();
    }

    function upload() {
    let url = "https://raw.githubusercontent.com/cmurray95/Dissertation/main/src/demos/colour-test.js";

    connection.upload(url).then(success => {
        if(success){
            document.getElementById("leds").style.visibility = "visible";
        } else {
            alert("Upload Failed! Please try again");
        }
    })
}
</script>

<style>
    .red {
        height: 25px;
        width: 25px;
        background-color: #D50000;
        border-radius: 50%;
        display: inline-block;
    }
    .blue {
        height: 25px;
        width: 25px;
        background-color: #0D47A1;
        border-radius: 50%;
        display: inline-block;
    }
    .green {
        height: 25px;
        width: 25px;
        background-color: #1B5E20;
        border-radius: 50%;
        display: inline-block;
    }
</style>