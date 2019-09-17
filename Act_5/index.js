var express = require('express');
var app = express();
var enrollStudent = require('./data')
var show = require('./readLine')


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.all('/enroll', function (req, res) {
    res.sendFile(__dirname + '/index.html');
    enrollStudent.dataHandler(req);
});

app.get('/class/:name', function (req, res) {
    show.read(req.params.name, res);
});

app.get("*", function (req, res){
    res.send("Not found");
});

var server = app.listen(3001, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})