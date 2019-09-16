var mongoose = require("mongoose");

var artSchema = new mongoose.Schema({
	title: String,
	image: String,
	description: String,
	artUrl: String
});

module.exports = mongoose.model("Art", artSchema);