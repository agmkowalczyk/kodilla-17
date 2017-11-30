var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs')

var app = express();
var stringifyFile;

app.use(bodyParser.json());

app.get('/getNote', function(req, res) {
	//console.log(fs.readFile);
	fs.readFile;
    //res.send('Identyfikator, który został dopisany to ' + req.params.id);


	fs.readFile('./test.json', 'utf8', function(err, data) {
	    if (err) throw err;
	    stringifyFile = data
	    res.send(data);
	});
});

app.post('/updateNote/:note', function (req, res) {
    console.log('Otrzymałem żądanie POST');
    //res.send('Hello POST!');
    stringifyFile = req.params.note;

	fs.writeFile('./test.json', stringifyFile, function(err) {
	    if (err) throw err;
	    console.log('file updated');
	});    
});

// app.get('/', function(req, res) {
// 	console.log('Otrzymałem żądanie GE1 do strony głównej');
//     res.send('Identyfikator, który został dopisany to ' + req.params.id);
// });

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});

// app.post('/', function (req, res) {
//     console.log('Otrzymałem żądanie POST do strony głównej');
//     res.send('Hello POST!');
// });

// app.delete('/del_user', function (req, res) {
//     console.log('Otrzymałem żądanie DELETE do strony /del_user');
//     res.send('Hello DELETE!');
// });

// app.get('/list_user', function (req, res) {
//     console.log('Otrzymałem żądanie GET do strony /list_user');
//     res.send('Strona z listą użytkowników!');
// });

// app.get('/ab*cd', function(req, res) {
//     console.log('Otrzymałem żądanie GET do strony /ab*cd');
//     res.send('Wzór pasuje');
// });

// var server = app.listen(3000, function() {
//     console.log('Przykładowa aplikacja nasłuchuje na http://localhost:3000');
// });

app.listen(3000);