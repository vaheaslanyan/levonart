var express 		= require("express"),
	app 			= express(),
	mongoose 		= require("mongoose"),
	methodOverride 	= require("method-override"),
	bodyParser 		= require("body-parser"),
	router			= require("router");

var Art 			= require("./models/art");

//require routes
var artsRoutes 		= require("./routes/arts"),
	indexRoutes 	= require("./routes/index");
	
	
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
app.use(methodOverride("_method"));

//using routes
app.use(artsRoutes);
app.use(indexRoutes);


app.listen(3000, function(){
	console.log("Server listening on port 3000")
})