const config = require("config");
const nodemailer = require("nodemailer");
const emailAddress = config.get("emailAddress");
const emailPassword = config.get("emailPassword");

const userMatchFoundEmail = (
	userEmail,
	username,
	userStreamingService,
	newUserEmail,
	newUsername,
	newUserStreamingService
) => {
	var transport = nodemailer.createTransport({
		service: "Gmail",
		auth: {
			user: emailAddress,
			pass: emailPassword,
		},
	});

	var mailOptions = [
		{
			from: '"Stream Share" <StreamShareContact@gmail.com>',
			to: userEmail,
			subject: "We found you a streaming friend!",
			text: "We found you a streaming friend!",
			html: `<h2> <b> Hi there, ${username}! </b> </h2>
            We have found you a friend who also wants to share a ${userStreamingService} account and save money. <br />
            Their name is ${newUsername} and their email is ${newUserEmail}, why not contact them today and arrange sharing an account. <br /><br />
            <i>Never share a password you use for any other account, generate a new secure unique password for your shared account. <br />
            From the team at Stream Share.</i>`,
		},
		{
			from: '"Stream Share" <StreamShareContact@gmail.com>',
			to: newUserEmail,
			subject: "We found you a streaming friend!",
			text: "We found you a streaming friend!",
			html: `<h2> <b> Hi there, ${newUsername}! </b> </h2>
            We have found you a friend who also wants to share a ${newUserStreamingService} account and save money. <br />
            Their name is ${username} and their email is ${userEmail}, why not contact them today and arrange sharing an account. <br /><br />
            <i>Never share a password you use for any other account, generate a new secure unique password for your shared account. <br />
            From the team at Stream Share.</i>`,
		},
	];

	mailOptions.forEach((option) => {
		transport.sendMail(option, (error, info) => {
			if (error) {
				return console.log(error);
			}
			console.log("Message sent: %s", info.messageId);
		});
	});
};

const verificationEmail = (username, streamingService, email) => {
	var transport = nodemailer.createTransport({
		service: "Gmail",
		auth: {
			user: emailAddress,
			pass: emailPassword,
		},
	});

	var mailOptions = {
		from: '"Stream Share" <StreamShareContact@gmail.com>',
		to: email,
		subject: "Verify your Stream Share account",
		text: "Please verify that you signed up for Stream Share",
		html: `<h2><b> Hi there, ${username}! </b></h2>
        Looks like someone signed up to Stream Share using your email. <br />
        If this was not you then you can safely ignore this email. <br />
        <a href="http://localhost:3000/verify/${streamingService}/${email}" target="_blank">Click here to verify your email.</a>
        <br /><br />
        <i>From the team at Stream Share</i>`,
	};

	transport.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error);
		}
		console.log("Message sent: %s", info.messageId);
	});
};

const emailHelper = {
	userMatchFoundEmail,
	verificationEmail,
};

module.exports = emailHelper;
