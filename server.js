// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
// Routes
var routes = require('./controllers/burgerController.js');

// Express
var app = express();
app.use(express.static(__dirname + '/public'));

// Parse application as JSON
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.use("/", routes);

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlesbars');

var PORT = process.env.PORT || 8080;

// Start server to listen for client requests
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});