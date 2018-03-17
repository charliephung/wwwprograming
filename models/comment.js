// Import Mongoose
var mongoose = require("mongoose");
mongoose.Promise = global.Promise; 
mongoose.plugin(schema => { schema.options.usePushEach = true });
mongoose.connect("mongodb://localhost/www-programming" ,{useMongoClient: true});

var commentSchema = mongoose.Schema({
	text: String,
	author: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		},
		username: String
	}
});

module.exports = mongoose.model("Comment", commentSchema);

