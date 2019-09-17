var express = require("express");
var app = express();
var mongoose = require("mongoose");
var Art = require("./models/art");
var bodyParser = require("body-parser");
	
//mongoose setup	
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb://localhost/levon_art", {
	useNewUrlParser: true,
	useCreateIndex: true
}).then(() => {
	console.log("Connected to DB");
}).catch(err => {
	console.log("ERROR: ", err.message);
});

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(){
	console.log("Server listening on port 3000")
})