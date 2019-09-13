var fs = require('fs');


exports.enroll = function(request) {
    var allData = '';

    request.on('data', function (data) {
    allData = JSON.parse(data);
    allDisplay = allData.name + "," + allData.courseYR + "," +  allData.email;

    fs.appendFile("./class/" + allData.subject + ".csv", allDisplay + "\n", function (err, data) {
    });
  });
}