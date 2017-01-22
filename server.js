var express = require('express');


// Create our app
var app = express();
const PORT = process.env.PORT;

app.use(function(req, res, next){

	//Redirect HTTPS request to http (Weather Map Fix ?? )
	if(req.headers['x-forwarded-proto'] === 'http'){
		next();
	}else {
		res.redirect('http://' + req.hostname + req.url);
	}
});

app.use(express.static('public'));

app.listen(PORT, function(){
	console.log('Express server is up on Port ' + PORT);
});