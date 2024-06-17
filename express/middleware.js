const express = require("express");
const app = express();
app.use(express.json())
app.listen(3000,()=>{
    console.log("server is running on Port 3000");
})

function checkKidneys(request,response,next)
{
    const kidneys = parseInt( request.query.kidney);

    if( !(kidneys==1 || kidneys == 2 ))
        {
            response.status(404).json("invalid no of kidneys, how are you alive");
        }
        else{
            next();
        }
}

function checkUser(request,response,next)
{
    const userId = request.headers.id;
    const password = request.headers.password;

    if( !(userId == "sanc" && password=="Sanchit@17" ) )
        {
            response.status(404).json("Not logged in");
        }
        else{
            next();
        }
}

app.get("/enterHospital",checkKidneys ,checkUser,(request, response)=>{
    
    response.status(200).json("healthy");

})