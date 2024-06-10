const express = require("express");
const fs = require('fs');

const app = express();

app.get('/todo-callback',function(req,res){

    readsFile( function(data){
        res.send(data);
    })
})

function readsFile(callback)
{
    fs.readFile("todo.txt","utf-8", function(err,data){
        callback(data);
    })
}

app.listen(4000);