// Use this file to run the entire website

var express = require("express");
const path = require("path");
var app = express();
var multer = require("multer");


var HTTP_PORT = process.env.PORT || 8080;

function onHTTPStart(){
    console.log("Express HTTP Server Listening on: " + HTTP_PORT);
}

// console.log(__dirname);

app.get("/", function(req,res){

    res.sendFile(path.join(__dirname,"/index.html"));
    
});

app.use((req,res) => {

    res.status(404).send("Page Not Found");
});

app.listen(HTTP_PORT, onHTTPStart);