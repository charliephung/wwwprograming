var Food 		= require("../models/food"),
request 		= require("request"),
Comment 		= require("../models/comment"),
express 		= require("express"),
router 			= express.Router({mergeParams: true}), //Noi dia chia url qua cac file
middleware		= require("../middleware");

// =====================
// COMMENTS ROUTES
// =====================
// Create new comment
router.get("/new", middleware.isLoggedIn, function(req, res) {
	// Find by id
	Food.findById(req.params.id, function(err, food) {
		if(err) {
			console.log(err);
		} else {
			res.render("comments/new", {food: food});
		}
	});
});

// Comment logic
router.post("/", middleware.isLoggedIn, function(req, res) {
	// Look up foot using id
	// Create comment
	// connect new comment to foot
	// redirect to show
	Food.findById(req.params.id, function(err, food) {
		if(err) {
			console.log(err);
		} else {
			Comment.create(req.body.comments, function(err, comment) {
				comment.author.id = req.user._id;
				comment.author.username = req.user.username;
				comment.save();
				
				food.comments.push(comment);
				food.save();
			});
			res.redirect("/foods/" +  food._id);
		}
	});
});

// ==============================
// COMMENT DELETE
// ==============================
router.delete("/:comment_id", middleware.checkCommentOwnership, function(req, res) {
	Comment.findByIdAndRemove(req.params.comment_id, function(err) {
		if (err) {
			res.redirect("back");
		} else {
			res.redirect("/foods/" + req.params.id);
		}
	});

});


module.exports = router;