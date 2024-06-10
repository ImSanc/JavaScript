console.log("Welcome to TODO");

const express = require('express');
const fs = require("fs");

const app = express();

app.get('/todo-task',async function(req,res){
   const p = await readsFile();
   console.log("waiting here");
   res.send(p);
});


function  readsFile()
{
 return new Promise( function(resolve)
{
    fs.readFile("todo.txt","utf-8",function(err,data){
        resolve(data.toString());
    })
})
}

app.listen(3000);
