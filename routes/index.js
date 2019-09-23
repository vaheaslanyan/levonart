var express = require("express"),
	router	= express.Router();
	
//index route
router.get("/", function(req, res){
	res.redirect("/art");
});

//bio
router.get("/bio", function(req, res){
	res.render("bio")
})

//conact
router.get("/contact", function(req, res){
	res.render("contact")
})

//login

router.get("/login", function(req, res){
	res.render("login")
})


module.exports = router