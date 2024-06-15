/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */

const express = require("express");
const path = require("path");
const fs = require("fs").promises;
const app = express();
app.listen(3000);
const directoryPath = path.join(__dirname, "files");

app.get("/files", async (request,response)=>{
 
  try{
  const files = await getFiles();
  response.json(files).status(200);
  }
  catch(err)
  {
      response.json({Error : "Directory doesnt exist"}).status(403);
  }
})

app.get("/files/:filename", async (request,response)=>{

  try{
    const fileName = request.params.filename;
    const filepath = path.join(directoryPath, fileName);
    const fileContent = await fs.readFile(filepath,"utf-8")
    response.status(200).json( {content : fileContent });
  }
  catch(err)
  {
    response.status(404).json( {error : `File not found` });
  }
})


async function getFiles()
{
  try{
    const files = await fs.readdir(directoryPath);
    const fileStats = await Promise.all(
      files.map(async file =>{
        const filePath = path.join(directoryPath,file);
        const stat = await fs.stat(filePath);
        return {file, isFile : stat.isFile()};
      })
    );

    const fileNames = fileStats.filter((fileStat => fileStat.isFile))
    .map( fileStat =>fileStat.file);
    return fileNames;
  }
  catch(err)
  {
    throw new Error("Failed to read directory");
  }
}


app.use((req, res) => {
  res.status(404).send('Route not found');
});

