$.ajax({
    type: "GET",
    url: "Math.csv",
    dataType: "text",
    error: function (error) {
        alert("Cannot enroll");
        $("input").val(null);
    },
    success: function (data) {
        var studentData = data.split(/\r?\n|\r/);
        var tableData = "<table class = table>";

        for (var count = 1; count <= studentData.length; count++) {

            var cell = studentData[count].split(",");

            tableData += "<tr>";

            for (var cellNum = 0; cellNum <= cell.length; cellNum++) {
                if (count == 0) {
                    tableData += "<th>" + cell[cellNum] + "</th>";
                } else {
                    tableData += "<td>" + cell[cellNum] + "</td>";
                }
            }
            tableData+="</tr>";
        }
        tableData+="</table>";
    },
});