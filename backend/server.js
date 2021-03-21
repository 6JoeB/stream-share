const express = require("express");
const app = express();
const port = 3000;

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
	res.send("hello world");
});

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});
