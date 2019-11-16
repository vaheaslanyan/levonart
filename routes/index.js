var express 		= require("express"),
	router			= express.Router(),
	passport		= require("passport");

var User			= require("../models/user");

//index route
router.get("/", function(req, res){
	res.render("landing");
});

//login

router.get("/login", function(req, res){
	res.render("login")
})

//logout route
router.get("/logout", function(req, res){
	req.logout();
	req.flash("error", "Logged Out"); // flash messages are added right before redirecting
	res.redirect("/art");
});

//handling login logic (app.post("login", middleware, callback))
router.post("/login", passport.authenticate("local", 
	{
		successRedirect: "/art",
		failureRedirect: "/login"
	}), function(req, res){
});

//bio
router.get("/bio", function(req, res){
	res.render("bio")
})

//conact
router.get("/contact", function(req, res){
	res.render("contact")
})




module.exports = router