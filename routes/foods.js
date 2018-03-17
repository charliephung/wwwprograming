var express = require("express"),
request 	= require("request"),
Food 	= require("../models/food"),
router 		= express.Router(),
middleware 	= require("../middleware");


// =====================
// PAGE ROUTES
// =====================
// Display all foods
router.get("/", function(req, res) {
	// Get all foods
	Food.find({}, function(err, allFoods) {
		if(err) {
			console.log(err);
		} else {
			res.render("foods/index", {allFoods: allFoods});
		}
	})
});

// Show comment on food
router.get("/:id", function(req, res) {
	var id = req.params.id;
	Food.findById(req.params.id).populate("comments").exec(function(err, food){
		if(err) {
			console.log(err);
		} else {
			res.render("foods/show", {food :food});
		}
	});
});

module.exports = router;