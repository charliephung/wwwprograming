var mongoose 		= require("mongoose");
var Food 			= require("./models/food");
var Comment 		= require("./models/comment");
var User 			= require("./models/user");

var data = [
{
	name: "Korean bibimbap with egg and vegetables",
	src: "img/1.jpg",
	description: "Di xe 54"
},
{
	name: "Simple italian pizza with cherry tomatoes",
	src: "img/2.jpg",
	description: "asdasd"
},
{
	name: "Chicken breast steak with vegetables",
	src: "img/3.jpg",
	description: "asdsad"
},
{
	name: "Chicken breast steak with vegetables",
	src: "img/4.jpg",
	description: "sadsadasd"
},
{
	name: "Paleo beef steak with vegetables",
	src: "img/5.jpg",
	description: "sadsada"
},
{
	name: "Healthy baguette with egg and vegetables",
	src: "img/6.jpg",
	description: "sadsad"
},
{
	name: "Burger with cheddar and bacon",
	src: "img/7.jpg",
	description: "aaa"
},
{
	name: "Granola with cherries and strawberries",
	src: "img/8.jpg",
	description: "asdas"
}];

function seedDB() {
	// Remove all data
	Food.remove({}, function(err) {
		if(err) {
			console.log(err);
		} else {
			console.log("Remove all Food");
			Comment.remove({}, function(err) {
				if (err) {
					console.log(err);
				} else {
					console.log("Remove all comments");
					User.remove({}, function(err){
						if (err) {
							console.log(err);
						} else {
							console.log("Remove all users");
						}
					});
				}
			});
		}
		// Add new data
		data.forEach(function(element) {
			Food.create(element, function(err, newFood) {
				if (err) {
					console.log(err);
				} else {
					console.log("Add a food");
				}
			});
		});
	});
}


module.exports =  seedDB;

