console.log("this is my first API application");

const express = require("express");
const app = express();
const port = 3000;
//let because data changes
let data = require("./data.json");

//get to do list data
function getTodos(req, res){
    let response = { todos: data};
    res.send(response);
}

/*//get request, respond
function reqGet(req, res){
    //makes json data
    let response = { output: "Hello World"};
    res.send(response);
}

//get User
function reqGetUser(req, res){
    //req is the get variables
    //localhost:3000/user?name=Akashjot&country=canada
    let name = req.query.name;
    let country = req.query.country;
    let response ={ name:name, country:country};
    //console.log(req);
    res.send(response);
}*/

//app.get("/", reqGet);//default request
//app.get("/user", reqGetUser);

app.get("/", getTodos);

function appStart(){
    console.log("To-Do-Api listening at "+ port);
}
app.listen(port, appStart);