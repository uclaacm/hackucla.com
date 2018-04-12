let mongoose = require('mongoose');

let User = require('./user');

const TOTAL_ATTENDANCE = 12;

let Team = new mongoose.Schema({
	name: { type: String, required: true },
    members: [{ type: mongoose.Schema.ObjectId, ref: 'User' , required: true}],
	scores: { type: [{ sessionNumber: Number, score: Number }] },
	attendance: { type: [{ sessionNumber: Number, usersAttended: [String] }] }
});

Team.statics.getAll = function() {
	return this.find({}).exec();
};

Team.statics.findById = function(id) {
	return this.findOne({ id }).exec();
};

Team.statics.findByName = function(name) {
	return this.findOne({ name }).exec();
};

Team.methods.addUser = function(user) {
	this.members.push(user);
	for (let i = 0; i < user.attendance.length; i++) 
		this.addAttended(user.attendance[i], user.id);
};

// TODO: use mongoose methods
Team.methods.removeUser = function(user) {
	for (let i = 0; i < this.members.length; i++) {
		if (this.members[i].id === user.id) {
			this.members.splice(i--, 1);
		}
	}

	for (let i = 0; i < user.attendance.length; i++)
		this.removeAttended(user.attendance[i], user.id);
};

Team.methods.addAttended = function(sessionNumber, userId) {
	let sessionFound = false;
	for (let i = 0; i < this.attendance.length; i++) {
		if (this.attendance[i].sessionNumber === sessionNumber) {
			sessionFound = true;
			if (!this.attendance[i].usersAttended.includes(userId))
				this.attendance[i].usersAttended.push(userId);
		}
	}

	if (!sessionFound)
		this.attendance.push({ sessionNumber: sessionNumber, usersAttended: [userId] });
};

Team.methods.removeAttended = function(sessionNumber, userId) {
	for (let i = 0; i < this.attendance.length; i++) {
		if (this.attendance[i].sessionNumber === sessionNumber) {
			let index = this.attendance[i].usersAttended.indexOf(userId);
			if (index !== -1) {
				this.attendance[i].usersAttended.splice(index, 1);
			}
		}
	}
};

Team.methods.addOrUpdateScore = function(sessionNumber, score, daysLate) {
	daysLate = Math.max(0, daysLate || 0);
	score = Math.max(0, score - ((daysLate <= 0) ? 0 : Math.pow(2, daysLate - 1)));
	for (let i = 0; i < this.scores.length; i++) {
		if (this.scores[i].sessionNumber === sessionNumber) {
			this.scores[i].score = score;
			return;
		}
	}

	this.scores.push({ sessionNumber, score });
};

Team.methods.removeScore = function(sessionNumber) {
	for (let i = 0; i < this.scores.length; i++) {
		if (this.scores[i].sessionNumber === sessionNumber) {
			this.scores.splice(i--, 1);
		}
	}
};

// TODO: refactor with mongoose to get all scores' sessionNumber and score
Team.methods.getScores = function() {
    return null;
}

Team.methods.getPublic = function(withMembers=true) {
	let team = {
		id: this.id,
		name: this.name,
		scores: this.getScores(),
		totalScore: this.scores.reduce((a,b) => a + b.score, 0) + (TOTAL_ATTENDANCE / this.members.length) * this.attendance.reduce((a,b) => a + b.usersAttended.length, 0)
	};
	
	if (withMembers) team.members = this.members.map(member => member.getPublic());
	return team;
};

module.exports = mongoose.model('Team', Team);
