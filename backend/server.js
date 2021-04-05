const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json({ extended: false }));

app.use("/api/users", require("./api/users"));

if (process.env.NODE_ENV === "production") {
	app.use(express.static("../frontend/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"));
	});
}

app.listen(PORT, () => {
	console.log(`App listening at http://localhost:${PORT}`);
});
