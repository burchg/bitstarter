/5000/8080/g
var express = require('express');
/5000/8080/g
var fs = require("fs");
/5000/8080/g

/5000/8080/g
var app = express.createServer(express.logger());
/5000/8080/g

/5000/8080/g
app.get('/', function(request, response) {
/5000/8080/g
	var data = fs.readFileSync("index.html", "utf8");
/5000/8080/g
  	response.send(data);
/5000/8080/g
});
/5000/8080/g

/5000/8080/g
var port = process.env.PORT || 5000;
/5000/8080/g
app.listen(port, function() {
/5000/8080/g
  console.log("Listening on " + port);
/5000/8080/g
});