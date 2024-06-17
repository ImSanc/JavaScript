const express = require("express");
const app = express();
app.use(express.json());
const zod =require("zod");

const schema =zod.array(zod.number()); 

app.listen(3000,()=>console.log("server is running "));

app.get("/checkup",  (request,response) =>{
    const kidneys = request.body.kidneys;
    const res = schema.safeParse(kidneys);
    response.send({
        res
    })
});