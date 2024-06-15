const express = require("express");
const fs = require("fs").promises;
const app = express();
const path = require("path");
const directoryPath = path.join(__dirname, "files");

app.listen(3000, function (){
    console.log("Server is running");
}
)


app.get("/files", async (request,response) =>{
    try{
    const files = await getFiles();
    response.status(200).json(files)
    }
    catch(err)
    {
        response.status(403).json({error : "directory missing"});
    }
})

async function getFiles()
{
    try{
        console.log("here");
        const directory = await fs.readdir(directoryPath);
        console.log(directory);
        const filenames = directory.map(file => file );
        return filenames;
    }
    catch(err)
    {
        throw new Error("Failed to read directory");
    }
}