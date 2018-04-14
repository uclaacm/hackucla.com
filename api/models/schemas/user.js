let mongoose = require('mongoose');

// User Schema Definition
let userSchema = new mongoose.Schema({
	email: { type: String },
	name: { type: String, required: true },
	profileId: {
		type: String,
		required: true, 
		unique: true
	},
	profilePicture: {
		small: { type: String },
		medium: { type: String },
		large: { type: String }
	},
	teamId: { type: String }
});

// User Schema Methods

/**
 * Creates and saves a User object in the database
 * @param {string} user's name
 * @param {string} user's profile ID (Google/Facebook)
 * @returns {User} newly saved User object
 * @example
 * User.create('Joe Bruin', 'someProfileId')
 *     .then(user => console.log(user))
 *     .catch(error => console.error(error));
 */
userSchema.statics.create = function (name, profileId) {
	var user = new this({
		name,
		profileId
	});

	return new Promise((resolve, reject) => {
		user.save((error, newUser) => {
			if (error) reject(error);
			else resolve(newUser);
		});
	});
};

/**
 * Read and Retrieve a User object from the database based on 
 * their Google or Facebook profile ID
 * @param {string} user's profileID
 * @returns {User} one User object with matching ID
 * @example
 * User.findByProfileId('someId')
 *     .then(user => console.log(user))
 *     .catch(error => console.error(error));
 */
userSchema.statics.findByProfileId = function (profileId) {
	return new Promise((resolve, reject) => {
		this.findOne({ profileId }, (err, user) => {
			if (err) reject(err);
			else resolve(user);
		});
	});
};

/**
 * Deletes user from DB given the MongoDB ID
 * @param {string} user's MongoDB ID
 * @example
 * User.delete('someMongoId')
 *     .catch(error => console.error(error));
 */
userSchema.statics.delete = function (id) {
	return new Promise((resolve, reject) => {
		this.findByIdAndRemove(id, (err) => {
			if (err) reject(err);
			else resolve();
		});
	});
};

module.exports = userSchema;