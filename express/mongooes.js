const express = require("express");
const app = express();
const mongooes = require("mongoose");
app.use(express.json())

app.listen(3000);

mongooes.connect("mongodb+srv://Sanchit:sanchit%4017@cluster0.8djn6b3.mongodb.net/sa");

const User = mongooes.model("User" ,{ name : String , email : String , password : String});

app.post("/signup", async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const userExist = await User.findOne({email : username});

    if(userExist)
        {
            return res.status(400).json("user already exist");
        }
    
    const user = new User({
        name : name,
        email : username ,
        password : password
    })

    user.save();
    res.status(200).json("user created successfully");
} )
