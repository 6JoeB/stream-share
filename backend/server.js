const express = require("express");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json({ extended: false }));

app.use("/api/users", require("./api/users"));

app.listen(PORT, () => {
	console.log(`App listening at http://localhost:${PORT}`);
});
