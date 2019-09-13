var fs = require('fs');
var table = require('./table');

exports.read = function(data, response){
      data = data.split("/");
      //console.log(data)
      var path = data +".csv";
      
    fs.readFile('./class/'+path,"utf8", function (err, data) { 
      if(err){
        response.writeHead(404, { 'Content-Type': 'text/html' });
        return response.end("No Classlist found");
      }
        table.createTable(data,response);
      });
}