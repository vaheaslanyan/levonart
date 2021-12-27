//gittest
require("dotenv").config();

var express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  methodOverride = require("method-override"),
  bodyParser = require("body-parser"),
  router = require("router"),
  passport = require("passport"),
  LocalStrategy = require("passport-local");

var Art = require("./models/art"),
  User = require("./models/user");

//require routes
var artsRoutes = require("./routes/arts"),
  indexRoutes = require("./routes/index");

//variables for app.listen
const port = process.env.PORT || 3000;
const ip = process.env.IP || "127.0.0.1";

//an enviromental url for the db and backup for our mongodb url in case the enviromental variable breaks for some reason
var url = process.env.DATABASEURL || "mongodb://localhost/levon_art";

//mongoose setup
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
    
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(err => {
    console.log("ERROR: ", err.message);
  });

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//PASSPORT CONFIGURATION
app.use(
  require("express-session")({
    secret:
      "If you want it you can get it, flow tighter than 4 fat bitches sitting in a civic!",
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//passing the currentUser info
app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

//using routes
app.use(artsRoutes);
app.use(indexRoutes);

app.listen(port, function() {
  console.log("Server has started .... at port " + port + " ip: " + ip);
});
