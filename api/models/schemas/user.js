let mongoose = require('mongoose');

let User = new mongoose.Schema({
    profileId: {
		type: String,
		required: true, 
		unique: true
	},
	name: { type: String, required: true},
	email: { type: String },
	profilePicture: {
		small: { type: String },
		medium: { type: String },
		large: { type: String }
	},
	accessToken: { type: String },
	lastSignIn: { type: Date },
	teamId: { type: String },
	attendance: [Number]
});

User.statics.findById = function(id) {
	return this.findOne({ id }).exec();
};

User.statics.findByProfileId = function(profileId) {
	return this.findOne({ profileId }).exec();
};

// TODO: get id, name, profile picture, and attendance
User.methods.getPublic = function() {
    return null;
};

module.exports = mongoose.model('User', User);
