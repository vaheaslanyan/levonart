var express 		= require("express"),
	router 			= express.Router(),
	Art 			= require("../models/art"),
	middleware		= require("../middleware/index.js");

//index route
router.get("/art", function(req, res){
	Art.find({}, function(err, allArt){
		if(err){
			console.log(err)
		} else {
			res.render("index", {art: allArt});
		}
	})

});

//New route
router.get("/art/new", middleware.isLoggedIn, function(req, res){
	res.render("new");
});

//Create route
router.post("/art", middleware.isLoggedIn, function(req, res){
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
router.get("/art/:id/edit", middleware.isLoggedIn, function(req, res){
	Art.findById(req.params.id, function(err, foundArt){
		if(err){
			console.log(err);
		} else {
			res.render("edit", {art: foundArt});
		}
	})
});

//Update route
router.put("/art/:id", middleware.isLoggedIn, function(req, res){
	Art.findByIdAndUpdate(req.params.id, req.body.art, function(err, updatedArt){
		if(err){
			console.log(err);
		} else {
			res.redirect("/art/" + req.params.id)
		}
	})
});

//Destroy route
router.delete("/art/:id", middleware.isLoggedIn, function(req, res){
	Art.findByIdAndRemove(req.params.id, function(err){
		if(err){
			console.log(err)
		} else {
			res.redirect("/")
		}
	})
})

module.exports = router;