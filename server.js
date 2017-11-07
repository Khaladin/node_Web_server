const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	// res.send('<h1>Hello Express!</h1>');
	res.send({
		name: 'Cory',
		likes: [
		'Reading',
		'Swimming'
		]
	})
});

app.get('/about', (req, res) => {
	res.send('About Page');
});

app.get('/bad', (req, res) => {
	res.send({
		errorMessage: 'Bad Call',
	});
});
// /bad - send back json with errorMessage

app.listen(3000, () => {
	console.log('server is up on port 3000');
});
