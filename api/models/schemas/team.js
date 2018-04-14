let mongoose = require('mongoose');

let teamSchema = new mongoose.Schema({
	name: { type: String, required: true },
	members: [{
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: true
	}]
}, { usePushEach: true });

// Team Schema Methods

/**
 * Creates and saves a Team object in the database
 * @param {string} team's name
 * @param {string[]} list of users' IDs in team
 * @returns {Team} newly saved Team object
 * @example
 * Team.create('Team A', ['idA', 'idB', 'idC'])
 *     .then(team => console.log(team))
 *     .catch(error => console.error(error));
 */
teamSchema.statics.create = function (name, members) {
	var team = new this({
		name,
		members
	});

	return new Promise((resolve, reject) => {
		team.save((error, newTeam) => {
			if (error) reject(error);
			else resolve(newTeam);
		});
	});
};

/**
 * Fetches all teams
 * @returns {Team[]} all saved Team objects
 * @example
 * Team.getAll()
 *     .then(teams => console.log(teams))
 *     .catch(error => console.error(error));
 */
teamSchema.statics.getAll = function () {
	return new Promise((resolve, reject) => {
		this.find({}, (error, teams) => {
			if (error) reject(error);
			else resolve(teams);
		});
	});
};

/**
 * Fetches a Team object given an ID
 * @param {string} team's MongoDB ID
 * @returns {Team} Team with given ID
 * @example
 * Team.getById('someId')
 *     .then(team => console.log(team))
 *     .catch(error => console.error(error));
 */
teamSchema.statics.getById = function (id) {
	return new Promise((resolve, reject) => {
		this.findById(id, (error, team) => {
			if (error) reject(error);
			else resolve(team);
		});
	});
};

/**
 * Fetches a Team object given a team name
 * @param {string} team's name
 * @returns {Team} Team with given name
 * @example
 * Team.getByName('someName')
 *     .then(team => console.log(team))
 *     .catch(error => console.error(error));
 */
teamSchema.statics.getByName = function (name) {
	return new Promise((resolve, reject) => {
		this.findOne({ name }, (error, team) => {
			if (error) reject(error);
			else resolve(team);
		});
	});
};

/**
 * Adds a member to the team
 * @param {string} user ID
 * @returns {Team} updated team
 * @example
 * team.addMember('userId')
 *     .then(team => console.log(team))
 *     .catch(error => console.error(error));
 */
teamSchema.methods.addMember = function (newMemberId) {
	this.members.push(newMemberId);

	return new Promise((resolve, reject) => {
		this.save((error, team) => {
			if (error) reject(error);
			else resolve(team);
		});
	});
};

/**
 * Removes a member from the team
 * @param {string} user ID
 * @returns {Team} updated team
 * @example
 * team.removeMember('userId')
 *     .then(team => console.log(team))
 *     .catch(error => console.error(error));
 */
teamSchema.methods.removeMember = function (memberId) {
	return new Promise((resolve, reject) => {
		var index = this.members.indexOf(memberId);
		if (index > -1) {
			this.members.splice(index, 1);
		} else {
			reject('A user with this ID does not exist in this team.');
		}

		this.save((error, team) => {
			if (error) reject(error);
			else resolve(team);
		});
	});
};

module.exports = teamSchema;