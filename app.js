const express = require("express");
const { handleById } = require("./controller/controllers");
const app = express();
const port = 8080;
app.get("/profile/:id", handleById);
app.get("/profiles", (req, res) => {
	res.send(process.platform);
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
