var app = require('express')();
var express = require('express');
var http = require("http").Server(app)
var port = process.env.PORT || 1234;
var path = require('path');
var fs = require('fs')
app.set('view engine', 'pug');
app.set('views','views');
var proVisit = {"bohol":0, "cebu": 0, "negros-oriental": 0, "camiguin": 0, "pangasinan": 0}

app.get('/', function (req, res) {
  res.end("Hello")
})

app.use(express.static(path.join(__dirname, '/public')))

app.get('/province/:name', function (req, res) {
  var provData;
  var name = req.params.name;
  proVisit[name]++;
  console.log(proVisit);
  fs.readFile("./province/" + name + ".json", function (err, data) {
    provData = JSON.parse(data);
    res.render("sample", { 
      shortname:provData.shortname,
      img1: provData.images[0], 
      img2: provData.images[1],
      img3: provData.images[2],
      name: provData.name, 
      group: provData.group, 
      population: provData.population,
      delicacies: provData.delicacies,
      writeup: provData.writeUp,
      rating: provData.rating
    })
  })
})



http.listen(port, function () {
  console.log('listening on *:' + port);
});