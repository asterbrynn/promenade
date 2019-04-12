const profileList = require('./profilelist');

module.exports = {
	sendList: (req, res) => {
		res.send(profileList)
	},
	create: (req, res) => {
		let newProfile = req.body;
		newProfile.id = id++;
		profileList.push(newProfile);
		res.send(profileList);
	}
}