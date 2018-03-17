// Import Mongoose
var mongoose = require("mongoose");
mongoose.Promise = global.Promise; 
mongoose.plugin(schema => { schema.options.usePushEach = true });
mongoose.connect("mongodb://localhost/www-programming" ,{useMongoClient: true});

// Schema setup
var foodSchema = new mongoose.Schema({
	name: String,
	src: String,
	description: String,
	comments: [
	{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Comment"
	}
	]
});

// Create model with method
module.exports = mongoose.model("Food", foodSchema);