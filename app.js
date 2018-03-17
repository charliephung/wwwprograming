// Import Framework
var  express 				= require("express"),
request 					= require("request"),
bodyParser 					= require("body-parser"),
mongoose 					= require("mongoose"),
passport 					= require("passport"),
passportLocal 				= require("passport-local"),
passportLocalMongoose 		= require("passport-local-mongoose"),
methodOverride 				= require("method-override"),
flash 						= require("connect-flash");

Food 					= require("./models/food"),
Comment 					= require("./models/comment"),
User 						= require("./models/user"),
seeds 						= require("./seeds");

// Import ROUTES 
var commentRoutes 		= require("./routes/comments"),
foodRoutes 		= require("./routes/foods"),
indexRoutes				= require("./routes/index");

// ===================
// APP CONFIQ
// ===================
var app = express();
app.use(bodyParser.urlencoded({extended: true}));

// Fill .ejs to file
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

// Setting up Mongoose
mongoose.Promise = global.Promise; 
mongoose.plugin(schema => { schema.options.usePushEach = true });
mongoose.connect("mongodb://localhost/www-programming" ,{useMongoClient: true});

// PASSPORT CONFIG
app.use(require("express-session")({
	secret: "phung ba hiep",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocal(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Seeding database
// seeds();

// PAGE LOGIC AND ADDING ROUTE
// Send user info to everypage 
app.use(function(req, res, next) {
	res.locals.currentUser = req.user;
	res.locals.message = req.flash("message");
	next();
});

// Add routes
app.use(indexRoutes);
app.use("/foods", foodRoutes);
app.use("/foods/:id/comments",commentRoutes);


// LAST ROUTE
app.get("/foods/*", function(req, res) {
	res.render("home");
});

// Setup port
app.listen(3000, function() {
	console.log("Sever Started");
});