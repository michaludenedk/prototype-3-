qrcode.result = "error decoding QR Code";
//...
qrcode.callback("Failed to load the image");

qrcode.result = Error("error decoding QR Code");
//...
qrcode.callback(Error("Failed to load the image"));


