var express = require("express");

var app = express();

var port = process.env.PORT || 8080;

app.listen(port, function(){
	console.log("Server running on port "+ port);
});

/* http://localhost:8080/ */
app.get("/", function(req, res) {

	res.sendFile(__dirname + '/index.html');

});


app.post("/login", function(req, res) {
	res.end("Hello, You are successfully logged in!");
});