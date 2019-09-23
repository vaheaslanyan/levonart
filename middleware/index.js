var middlewareObj = {};
//checking if the user is logged in
middlewareObj.isLoggedIn = function(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	req.flash("error", "You need to be logged in.");
	res.redirect("/login")
}

module.exports = middlewareObj;