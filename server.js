let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let session   = require('express-session');
let bcrypt   = require("bcryptjs");
let path     = require("path");
let app = express();
let port = 8000;

//Change this to the Angular paths

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json());
app.use(session({ 
	secret: "Urumqi",
	resave: false,
  saveUninitialized: true,
}));
app.use(express.static(__dirname + '/client/dist'));

require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(port, function (){
    console.log(`Listening on port ${port}`)
});