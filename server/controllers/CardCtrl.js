let {profileList, id} = require('./profilelist');

module.exports = {
	sendList: (req, res) => {
		res.send(profileList)
	},
	create: (req, res) => {
		let newProfile = req.body;
		newProfile.id = id++;
		profileList.push(newProfile);
		res.send(profileList);
	},
	update: (req, res) => {
		let {id} =  req.params;
		let updatedProfile = req.body;
		updatedProfile.id = id;
		let index = profileList.findIndex(card => +card.id === +id);
		profileList.splice(index, 1, updatedProfile);
		res.send(profileList);
	}
}