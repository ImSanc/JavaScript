const fs = require('fs');
const text = "hello     world    my    name   is       raman";

function writeInfile(str){
    fs.writeFile("a.txt"
    ,str
    ,"utf-8"
    , function(err) {
        if(err)
            {
                console.error("Couldnt write in the file ",err);
            }
            else
            {
                console.log("wrote in file successfully");
            }
    });
    readsFile();
}

function readsFile()
{
    fs.readFile("a.txt"
    ,"utf-8"
    , function(err,data){
        console.log(data);
    });
}

function editFile()
{
    let newText = "";
    fs.readFile("a.txt"
    ,"utf-8"
    , function(err,data){
       
        const words = data.split(/\s+/);
        for( const str of words)
            {
                newText+=str;
                newText+=" ";
            }

       newText = newText.trim();
       writeInfile(newText);
    });
}

writeInfile(text);
editFile();