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
					return res
						.status(200)
						.json({ msg: "Email already registered but not verified" });
				}
				return res.status(200).json({ msg: "Email already registered" });
			}

			user = new User({ name, email, streamingService });
			user.save();
			res.status(201).json(user);
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server error");
		}
	}
);

// @route GET api/users/findmatch
// @desc Find a match for a user
router.get(
	"/findmatch",
	[
		check("streamingService", "StreamingService is required").not().isEmpty(),
		check("email", "Please enter valid email").isEmail(),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { streamingService, email } = req.body;

		try {
			let users = await User.find({ streamingService, verified: true, searching: true });

			if (users.length === 0) {
				return res.status(404).json({ msg: "No matches found" });
			}

			users.forEach((user) => {
				if (user.email !== email) {
					return res.status(200).json(user);
				}
			});
			return res.status(404).json({ msg: "No matches found" });
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server error");
		}
	}
);

// @route GET api/users/verify/:email
// @desc Verify a users email

router.put("/verify/:email", async (req, res) => {
	const email = req.params.email;

	try {
		const user = await User.findOne({ email });

		if (!user) {
			return res.status(200).json({ msg: "No user found" });
		}
		user.verified = true;
		user.save();

		return res.status(200).json(user);
	} catch (err) {
		console.error(err.message);
		return res.status(500).send("Server error");
	}
});

module.exports = router;
