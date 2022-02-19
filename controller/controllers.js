const { getProfile } = require("../model/data");
function handleById(req, res, next) {
	const { id } = req.params;
	getProfile(id)
		.then((data) => {
			res.status(200).send(data);
		})
		.catch((err) => {
			res.status(err.status).send(err.msg);
		});
}

function handleAll() {}

module.exports = { handleById };
