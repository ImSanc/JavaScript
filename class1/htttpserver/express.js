const express = require('express');
const port = 3000;
const app = express();

app.use(express.json());

app.get('/',function(req,res){
    res.send('hello world');
});

app.listen(port);

app.post('/postRequest', function(req,res)
{
    console.log(req.body);
    res.send('hello world');
})