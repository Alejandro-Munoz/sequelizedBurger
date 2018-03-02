const express = require("express");
const mo = require("method-override");
const bodyPaserser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

//server static content
app.use(express.static('public'));
// parse application/x-www-form-urlencoded
app.use(bodyPaserser.urlencoded({extended:false}));
// parse application/json
app.use(bodyPaserser.json());
// parse text
// app.use(bodyPaserser.text());

// set handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout:'main'}));
app.set('view engine','handlebars');

//import routes
var routes = require('./controllers/burgers_controller');

app.use(routes);

app.listen(PORT, function(){
    console.log('App now listening at localhost' + PORT);
})
