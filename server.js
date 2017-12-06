const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.static('assets'));

app.get('/', function(req, res){
    res.render('content', {

	    response: {
	        getLogin: req.query.getLogin
	    },
  	
    	user: { 
    		name: "user", firstName: "Jan", lastName: "Kowalski" 
    	},

        title: "Logowanie",
        url: "/auth/google"
    });
});

app.get('/auth/google', function(req, res){
    res.render('form');
});

app.get('/logged', function(req, res){
    res.render('logged');
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});