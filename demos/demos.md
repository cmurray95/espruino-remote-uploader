---
layout: default
has_children: true
nav_order: 3
title: Demos
---

<script src="https://unpkg.com/remote-uploader@3.0.0/dist/remote.min.js"></script>

# Demos
<strong>Please ensure you are using a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API#browser_compatibility">web-bluetooth compatible browser/device</a> when using these demos.<strong>

Here you will find various demos for a variety of espruino devices demonstrating various usecases of the remote uploader tool.

Alternatively, you can use the following demo to upload code to any device:

<input type="text" name="url" id="url" value="" placeholder="Link to espruino code">
<button onclick="connect()" class="btn" type="button">Connect</button>
<button onclick="upload()" class="btn" type="button">Upload</button>

<p></p>

<div id="status"> </div>

<script>
    let connection = new Remote();

    function connect() {
        connection.connect();
    }

    function upload(){
        let url = document.getElementById("url").value;
        connection.upload(url).then(result => {
            if(result){
                document.getElementById("status").innerHTML = 'success!';
            } else {
                document.getElementById("status").innerHTML = 'failed!';
            }
        })
    }
</script>


