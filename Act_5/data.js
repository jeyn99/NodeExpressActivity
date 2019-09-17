var fs = require('fs');

exports.dataHandler = function(request){
    request.on('data', function (data) {
        allData = JSON.parse(data);
        student = allData.name;
        subjectName = allData.subject;
        courseYR = allData.courseYR;
        email = allData.email;
        allDisplay = student + "," + courseYR + "," + email;
        fs.appendFile('./class/'+subjectName + ".csv", allDisplay + "\n", function (err, data) {
        });
    });
}