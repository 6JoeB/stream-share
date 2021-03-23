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
	searching: {
		type: Boolean,
		default: false,
	},
	verified: {
		type: Boolean,
		default: false,
	},
});

module.exports = User = mongoose.model("user", UserScheme);
