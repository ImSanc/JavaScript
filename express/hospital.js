const users = [{
    name: "sanchit",
    kidney : [
        {healthy : true},
        {healthy : false},
        {healthy : true}
    ]
}]

const express = require("express");
const { message } = require("statuses");
const app = express();
app.use(express.json());
app.listen(3000);

app.get("/getStatus", function(req,res){
    const kidneys = users[0].kidney;

    const healthyKidneys = kidneys.filter(function(kidney){
    return kidney.healthy
   })

   const unhealthyKidney = kidneys.length - healthyKidneys.length;

   res.status(200).json({ name: users[0].name ,kidneys: {total: kidneys.length, healthy :healthyKidneys.length, unhealthy : unhealthyKidney}});

})

app.post("/addKidney", function(req,res){
    const kidneyStatus = req.body.healthy;
    const kidneyPresent = users[0].kidney;
    kidneyPresent.push({ healthy :kidneyStatus});
    res.status(200).json( {message : "added successfully"});
})

app.put("/replace",function(req,res){
    const kidneys = users[0].kidney;
    const kidney = req.body.replaceKidney-1;
    kidneys[kidney].healthy= true;

    res.status(200).json({message : "kidney replaced"})
})

app.delete("/remove" , function(req,res){
    const kidneyToRemove =req.body.removeKidneyNumber-1;
    if(kidneyToRemove>users[0].kidney.length)
        {
            res.status(411).json({message : "there is no kidney present here"})
        }
        else{

    const kidneys = users[0].kidney.splice(kidneyToRemove,1);
    res.status(200).json({message : "kidney removed"})
        }
})

app.put("/replaceAll",function(req,res){
   for(let i=0 ; i<users[0].kidney.length ; i++)
    {
        users[0].kidney[i].healthy = true;
    }

    res.status(200).json({message : "All kidney replaced"})
})