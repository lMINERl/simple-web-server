var express = require('express');
var path = require('path');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/file',function(req,res){
     const filename = req.query.name;
     res.sendFile(path.join(__dirname,"assets",filename));
});

app.listen(3000);