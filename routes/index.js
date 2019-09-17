var express = require("express"),
	router	= require("router"),
	
	
//index route
router.get("/", function(req, res){
	Art.find({}, function(err, allArt){
		if(err){
			console.log(err)
		} else {
			res.render("index", {art: allArt});
		}
	})

});

module.exports = router;