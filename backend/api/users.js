const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const emailHelper = require("../helpers/emailHelper");

// @route POST api/users/register
// @desc Register user
router.post(
	"/register",
	[
		check("username", "username is required").not().isEmpty(),
		check("streamingService", "StreamingService is required").not().isEmpty(),
		check("email", "Please enter valid email").isEmail(),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const email = req.body.email.toLowerCase();
		const { username, streamingService } = req.body;

		try {
			let user = await User.findOne({ email });

			if (user && user.verified) {
				return res.status(200).json({ msg: "Email already registered" });
			}

			user = new User({ username, email, streamingService });
			user.save();

			emailHelper.verificationEmail(username, streamingService, email);

			return res.status(201).json({ msg: "success", user });
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server error");
		}
	}
);

// @route PUT api/users/verify/:email
// @desc Verify a users email

router.put("/verify/:email", async (req, res) => {
	const email = req.params.email.toLowerCase();

	try {
		const user = await User.findOne({ email });

		if (!user) {
			return res.status(404).json({ msg: "No user found" });
		}

		user.verified = true;
		user.save();

		return res.status(200).json(user);
	} catch (err) {
		console.error(err.message);
		return res.status(500).send("Server error");
	}
});

// @route POST api/users/findmatch
// @desc Find a match for a user
router.post(
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

		const email = req.body.email.toLowerCase();

		try {
			let newUser = await User.findOne({ email });

			if (!newUser || newUser.searching !== true) {
				return res.status(404).json({ msg: "No matches found" });
			}

			const { streamingService } = newUser;
			let users = await User.find({ streamingService, verified: true, searching: true });

			if (users.length <= 1) {
				return res.status(404).json({ msg: "No matches found" });
			}

			users.forEach((user) => {
				if (user.email !== email) {
					emailHelper.userMatchFoundEmail(
						user.email,
						user.username,
						user.streamingService,
						newUser.email,
						newUser.username,
						newUser.streamingService
					);

					user.searching = false;
					user.save();

					newUser.searching = false;
					newUser.save();
					return res.status(200).json({
						msg: `User matches found`,
						user1: `${email}`,
						user2: `${user.email}`,
					});
				}
			});
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server error");
		}
	}
);

module.exports = router;
