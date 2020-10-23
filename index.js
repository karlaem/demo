console.log("this is my first API application");

const express = require("express");
const app = express();
const port = 3000;


//get request, respond
function reqGet(req, res){
    //makes json data
    let response = { firstName: "Karla Estefania", lastName: "Mercado Garcia", output: "Hello World"};
    res.send(response);
}


app.get("/", reqGet);//default request


function appStart(){
    console.log("To-Do-Api listening at "+ port);
}
app.listen(port, appStart);