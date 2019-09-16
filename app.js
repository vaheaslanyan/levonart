var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

var art = [
	{
		author: "Levon Gurjinian",
		title: "Woman wearing Armenian Taraz", 
		image: "https://img.artpal.com/436321/1-19-6-27-19-33-24m.jpg",
		description: "A woman wearing a traditional Armenian clothing Taraz"
	},
	{
		author: "Levon Gurjinian",
		title: "Henrikh Mkhitaryan", 
		image: "https://img.artpal.com/436321/4-19-6-28-18-2-17m.jpg",
		description: "Legendary Armenian soccer player Henrikh Mkhitaryan"
	},
	{
		author: "Levon Gurjinian",
		title: "Beyonce", 
		image: "https://img.artpal.com/436321/2-19-6-27-19-45-19m.jpg",
		description: "Just beyonce"
	},
		{
		author: "Levon Gurjinian",
		title: "Woman wearing Armenian Taraz", 
		image: "https://img.artpal.com/436321/1-19-6-27-19-33-24m.jpg",
		description: "A woman wearing a traditional Armenian clothing Taraz"
	},
	{
		author: "Levon Gurjinian",
		title: "Henrikh Mkhitaryan", 
		image: "https://img.artpal.com/436321/4-19-6-28-18-2-17m.jpg",
		description: "Legendary Armenian soccer player Henrikh Mkhitaryan"
	},
	{
		author: "Levon Gurjinian",
		title: "African Woman", 
		image: "https://img.artpal.com/436321/3-49-44t.jpg",
		description: "A profile painting of an African woman"
	}
];



app.get("/", function(req, res){
	res.render("index", {art: art});
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
	
});

//Show request
app.get("/art/:id", function(req, res){
	res.render("art_page")
});

app.listen(3000, function(){
	console.log("Server listening on port 3000")
})