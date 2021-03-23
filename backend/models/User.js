const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	streamingService: {
		type: String,
		required: true,
	},
	verified: {
		type: Boolean,
		default: false,
	},
	searching: {
		type: Boolean,
		default: true,
	},
});

module.exports = User = mongoose.model("user", UserScheme);
