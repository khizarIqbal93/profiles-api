const { db } = require("../config");

async function getProfile(id) {
	const docRef = db.collection("consultants").doc(id);
	const profile = await docRef.get();
	if (profile.exists) {
		return profile.data();
	} else {
		return Promise.reject({ status: 404, msg: "Profile does not exist" });
	}
}

async function getAllProfiles() {
	const profilesRef = db.collection("consultants");
	const allProfiles = profilesRef.get();
	if (allProfiles.exists) {
		return allProfiles.data();
	} else {
		return Promise.reject({ status: 404, msg: "no profiles!" });
	}
}

module.exports = { getProfile };
