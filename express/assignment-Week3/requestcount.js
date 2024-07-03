const express = require("express");
const app = express();

app.listen(3000);
let requestCount =0 ;

function requestCounter(req,res,next)
{
    requestCount++;
    next();
}
//app.use(requestCounter);


app.get("/user", requestCounter,(req,res)=>{
    res.status(200).json("John");
})

app.post("/create" ,requestCounter ,(req,res)=>{
    res.status(200).json({User : "john"});
})

app.get("/requestCount", (req,res)=>{
    res.status(200).json( { totalRequest : requestCount});
})