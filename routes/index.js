var express = require("express"),
	passport = require("passport"),
	User = require("../models/user"),
	router = express.Router();




// =====================
// AUTH ROUTES
// =====================

// Landing page
router.get("/", function (req, res) {
	res.render("home");
});

// Register Form
router.get("/register", function (req, res) {
	res.render("register");
});

// Sign Up 
router.post("/register", function (req, res) {
	if (req.body.username.length < 3 || req.body.password.length < 6) {
		req.flash("message", "Username must be at least 3 characters, Password must be at least 6 characters");
		return res.redirect("register");
	}
	User.register(new User({
		username: req.body.username
	}), req.body.password, function (err, user) {
		if (err) {
			req.flash("message", err.message);
			return res.redirect("register");
		} else {
			passport.authenticate("local")(req, res, function () {
				res.redirect("/foods");
			});
		}
	});
});

// Login 
router.get("/login", function (req, res) {
	res.render("login");
});

router.post('/login', function (req, res, next) {
	passport.authenticate('local', function (err, user, info) {
		if (err) {
			return next(err);
		}
		if (!user) {
			req.flash("message", "Incorrect password or username");
			return res.redirect('/login');
		}
		req.logIn(user, function (err) {
			if (err) {
				return next(err);
			}
			return res.redirect('/foods');
		});
	})(req, res, next);
});


// Logout
router.get("/logout", function (req, res) {
	req.logOut();
	req.flash("message", "Logged you out!");
	res.redirect('/');
});

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect("/login");
}

module.exports = router;