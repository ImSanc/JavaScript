const express = require("express");
const app = express();

app.listen(3000);

function factorial(n)
{
    let factorial = 1;

    while(n>1)
        {
            factorial*=n;
            n--;
        }
        return factorial;
}

app.get("/", function(req,res){
    const n = req.query.n;
    const result = factorial(n);
    res.send(result.toString());
})