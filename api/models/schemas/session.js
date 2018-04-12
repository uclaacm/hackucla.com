let mongoose = require('mongoose');

let Session = new mongoose.Schema({
	number: { type: Number, required: true, unique: true },
	secret: { type: String, required: true, unique: true },
	name: { type: String, required: true },
	desc: { type: String, required: true },
	image: { type: String, required: true },
	date: {
		start: { type: Date, required: true },
		end: { type: Date, required: true },
	},
	blogPostLink: { type: String },
	project: {
		points: { type: Number },
		videoLink: { type: String },
		slidesLink: { type: String },
		submissionLink: { type: String },
		sourceCodeLink: { type: String }
	}
});

Session.statics.getAll = function() {
	return this.find({}).exec();
};

Session.statics.findById = function(id) {
	return this.findOne({ id }).exec();
};

Session.statics.findSessionForDate = function(date) {
	return this.findOne({ 'date.start' : { $lt : new Date(date) }, 'date.end' : { $gt : new Date(date) } }).exec();
};

module.exports = Session;