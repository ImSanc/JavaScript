const fs = require('fs');

function readsFile()
{
    return new Promise( function(resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data);
        });
    });
}

function onDone(data)
{
    console.log(data);
}


async function main()
{
    const p = await readsFile();
    onDone(p) ;
}