var express = require("express"),
	router	= express.Router();
	
//index route
router.get("/", function(req, res){
	res.redirect("/art");
});


module.exports = router