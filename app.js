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

//index route
app.get("/", function(req, res){
	Art.find({}, function(err, allArt){
		if(err){
			console.log(err)
		} else {
			res.render("index", {art: allArt});
		}
	})

});

app.get("/art", function(req, res){
	res.redirect("/");
});

//New request
app.get("/art/new", function(req, res){
	res.render("new");
});

//Create request
app.post("/art", function(req, res){
	var title = req.body.title;
	var image = req.body.image;
	var description = req.body.description;
	var artUrl = req.body.artUrl;

	var newArt = {title: title, image: image, description: description, artUrl: artUrl}
	//create new art and savw
	Art.create(newArt, function(err, newlyCreated){
		if(err) {
			console.log("err")
		} else {
			res.redirect("/")
		}
	})	
});

//Show route
app.get("/art/:id", function(req, res){
	Art.findById(req.params.id).exec(function(err, foundArt){
		if(err){
			console.log(err);
		} else {
			//render "show" template with that campground
			res.render("art_page", {art:foundArt});
		}
	});
});

app.listen(3000, function(){
	console.log("Server listening on port 3000")
})