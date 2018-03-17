// ALL MIDDLEWARE
var middlewareObj 	= {},
Food 				= require("../models/food"),
Comment 			= require("../models/comment");

middlewareObj.checkOwnership = function checkOwnership(req, res, next) {
	// If is loggin??
	if (req.isAuthenticated()) {
		Food.findById(req.params.id, function(err, foundCampground) {	

			if (err) {
				req.flash("message", "Not Found!");
				res.redirect("back");
			} else {
				// If the user own this camp
				if (foundCampground.author.id.equals(req.user._id)) {
					next();
				} else {
					req.flash("message", "You don't have permission!!!");
					res.redirect("back");
				}
			}
		});
	} else {
		res.redirect("back");
	}
}

middlewareObj.checkCommentOwnership = function checkCommentOwnership(req, res, next) {
	// If is loggin??
	if (req.isAuthenticated()) {
		Comment.findById(req.params.comment_id, function(err, foundComment) {	
			if (err) {
				req.flash("message", "Not Found!");
				res.redirect("back");
			} else {
				// If the user own this comment
				if (foundComment.author.id.equals(req.user._id)) {
					next();
				} else {
					req.flash("message", "You don't have permission!!!");
					res.redirect("back");
				}
			}
		});
	} else {
		res.redirect("back");
	}
} 

middlewareObj.isLoggedIn = function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	} 
	req.flash("message", "You have to login first!!");
	res.redirect("/login");
}

module.exports = middlewareObj;
