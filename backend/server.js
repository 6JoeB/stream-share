const express = require("express");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

try {
	connectDB();
	console.log("Connected to MongoDB...");
} catch (err) {
	console.log(err);
}

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
	res.send("hello world");
});

app.listen(PORT, () => {
	console.log(`App listening at http://localhost:${PORT}`);
});
