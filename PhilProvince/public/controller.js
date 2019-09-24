var fs = require('fs')

exports.counter = function(req){
    let count;
    fs.readFile('num-request.txt',"utf-8", function (err, data) {
        //console.log(data+1)*1;
        count = (data * 1)+1;
        fs.writeFile('num-request.txt', count, function (err) {
          if (err) throw err;
          console.log("Saved!")
        });
      });
}
