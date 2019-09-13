exports.createTable = function(data,response){
    var table= "<html><head><title>Class List</title><link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm' crossorigin='anonymous'>"+
    "<body><center><table class='table table-responsive table-striped'>"+
    "<thead><th>Names</th><th>Course</th><th>Email</th></thead><tbody>";
    var tr = "<tbody>";
    var closer = "</tbody></table></center></body></head></html>";

    var clas = data.split("\n").join(",");
    var info = clas.split(',');
    var len = (info.length-1)/3;
    var counter=0;
    var temp =""   
      ;
    for(let index = 0; index < len; index++ ){
       
        temp+="<tr><td>"+info[counter]+"</td>"+"<td>"+info[counter+1]+"</td>"+"<td>"+info[counter+2]+"</td></tr>";
        counter+=3;
        
    
    }
    table+=tr+temp+closer;

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(table);
    response.end();
}