var app = require('express')();
var express = require('express');
var http = require("http").Server(app)
var port = process.env.PORT || 1234;
var path = require('path');
var fs = require('fs')
app.set('view engine', 'pug');
app.set('views','views');

app.get('/', function (req, res) {
  res.end("Hello")
})

app.use(express.static(path.join(__dirname, '/public')))


app.get('/province/:name', function (req, res) {
  var provData;
  var name = req.params.name + ".json"
  fs.readFile("./province/" + name, function (err, data) {
    provData = JSON.parse(data);
    console.log(provData.name);
    res.render("sample", { 
      img1: provData.images[0], 
      img2: provData.images[1],
      img3: provData.images[2],
      name: provData.name, 
      group: provData.group, 
      population: provData.population,
      delicacies: provData.delicacies,
      writeup: provData.writeUp
    })
    
  })
})


http.listen(port, function () {
  console.log('listening on *:' + port);
});