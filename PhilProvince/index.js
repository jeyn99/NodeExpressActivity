var app = require('express')();
var express = require('express');
var http = require("http").Server(app)
var port = process.env.PORT || 1234;
var path = require('path');
var count = require('./public/controller')
var fs = require('fs')
app.set('view engine', 'pug');
app.set('views', 'views');
var proVisit = { "bohol": 0, "cebu": 0, "negros-oriental": 0, "camiguin": 0, "pangasinan": 0 }
// var count;

app.get('/', function (req, res) {
  //count.counter(req)
  res.end("Hello")
})

app.use(express.static(path.join(__dirname, '/public')))

app.use((req, res, next) => {
  //console.log(`${req.method} ${req.originalUrl}`)
  count.counter(req);
  next();
})

app.get('/province/:name', function (req, res) {
  var provData;
  var name = req.params.name;
  proVisit[name]*1+1;
  console.log(proVisit);
  fs.readFile("./province/" + name + ".json", function (err, data) {
    provData = JSON.parse(data);
    res.render("index", {
      shortname: provData.shortname,
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

app.get("*", function (req, res) {
  res.send("Not found");
  res.end();
  count.counter(req)
});

http.listen(port, function () {
  console.log('listening on *:' + port);
});