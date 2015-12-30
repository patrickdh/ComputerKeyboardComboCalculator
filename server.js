var express = require('express'),
	bodyParser = require('body-parser'),
	app     = express();

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

app.use('/js', express.static(__dirname + '/js'));

app.listen(3000, function(){
	console.log("I am listening...");
});