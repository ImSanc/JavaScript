const fs = require('fs');

function readsFile(funtn)
{
    fs.readFile("a.txt","utf-8", function(err,data) {
        funtn(data);
    });
}

function read(data)
{
    console.log(data);
}

readsFile(read);