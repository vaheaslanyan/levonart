var express 		= require("express"),
	router 			= require("router"),
	Art 			= require("../models/art"),
	methodOverride 	= require("method-override");


//index route
router.get("/art", function(req, res){
	res.redirect("/");
});

//New route
router.get("/art/new", function(req, res){
	res.render("new");
});

//Create route
router.post("/art", function(req, res){
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
router.get("/art/:id", function(req, res){
	Art.findById(req.params.id).exec(function(err, foundArt){
		if(err){
			console.log(err);
		} else {
			//render "show" template with that campground
			res.render("art_page", {art:foundArt});
		}
	});
});

//Edit route
router.get("/art/:id/edit", function(req, res){
	Art.findById(req.params.id, function(err, foundArt){
		if(err){
			console.log(err);
		} else {
			res.render("edit", {art: foundArt});
		}
	})
});

//Update route
router.put("/art/:id")

module.exports = router;