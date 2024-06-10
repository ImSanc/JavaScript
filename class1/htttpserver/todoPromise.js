const express = require('express');
const fs = require("fs");

const app = express();

app.get("/todo-using-promise", function(req,res){
    readFile().then( data =>{ res.send(data)}) ;
})

function readFile()
{
    return new Promise(function(resolve){
        fs.readFile("todo.txt","utf-8", function(err,data){
            resolve(data);
        })
    })
}

app.listen(4000);