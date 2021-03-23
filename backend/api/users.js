const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const config = require("config");
const nodemailer = require("nodemailer");
const User = require("../models/User");

// @route POST api/users/register
// @desc Register user
router.post(
	"/register",
	[
		check("name", "Name is required").not().isEmpty(),
		check("streamingService", "StreamingService is required").not().isEmpty(),
		check("email", "Please enter valid email").isEmail(),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, email, streamingService } = req.body;

		try {
			let user = await User.findOne({ email });

			if (user) {
				if (!user.verified) {
					res.status(200).json({ msg: "Email already registered but not verified" });
				}
				res.status(200).json({ msg: "Email already registered" });
			}

			user = new User({ name, email, streamingService });
			user.save();
			res.status(200).json(user);
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server wrror");
		}
	}
);

module.exports = router;
