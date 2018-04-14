let mongoose = require('mongoose');

let sessionSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	image: { type: String, required: true },
	date: {
		start: { type: Date, required: true },
		end: { type: Date, required: true },
	},
	resources: {
		sourceCodeLink: { type: String },
		slidesLink: { type: String },
		videoLink: { type: String },
	},
	project: {
		submissionLink: { type: String }
	}
});

// Session Schema Methods

/**
 * Creates an uninitialized Session object (not saved to DB yet).
 * Utilizes builder pattern.
 * @returns {Session} empty Session object
 * @example
 * Session.init()
 */
sessionSchema.statics.init = function () {
	return new this();
};

/**
 * Sets name of session
 * @param {string} name
 * @returns {Session} this session
 * @example
 * Session.init()
 *        .withName("name")
 *        .build()
 *        .then(session => console.log(session));
 */
sessionSchema.methods.withName = function (name) {
	this.name = name;
	return this;
};

sessionSchema.methods.withDescription = function (description) {
	this.description = description;
	return this;
};

sessionSchema.methods.withImage = function (image) {
	this.image = image;
	return this;
};

sessionSchema.methods.withDateRange = function (startDate, endDate) {
	this.date.start = startDate;
	this.date.end = endDate;
	return this;
};

sessionSchema.methods.withSourceCodeLink = function (sourceCodeLink) {
	this.resources.sourceCodeLink = sourceCodeLink;
	return this;
};

sessionSchema.methods.withSlidesLink = function (slidesLink) {
	this.resources.slidesLink = slidesLink;
	return this;
};

sessionSchema.methods.withVideoLink = function (videoLink) {
	this.resources.videoLink = videoLink;
	return this;
};

sessionSchema.methods.withSubmissionLink = function (submissionLink) {
	this.project.submissionLink = submissionLink;
	return this;
};

/**
 * Creates and saves an initialized Session object
 * @param {Session} initialized session
 * @returns {Session} newly saved Session object
 * @example
 * Session.init()
 *        .withName("name")
 *        .withDescription("desc")
 *        .withImage("imageURL")
 *        .withDateRange(new Date(), new Date())
 *        .build()
 *        .then(session => console.log(session));
 */
sessionSchema.methods.build = function () {
	return new Promise((resolve, reject) => {
		this.save((error, newSession) => {
			if (error) reject(error);
			else resolve(newSession);
		});
	});
};

/**
 * Fetches all sessions
 * @returns {Session[]} all saved Session objects
 * @example
 * Session.getAll()
 *     .then(sessions => console.log(sessions))
 *     .catch(error => console.error(error));
 */
sessionSchema.statics.getAll = function () {
	return new Promise((resolve, reject) => {
		this.find({}, (error, sessions) => {
			if (error) reject(error);
			else resolve(sessions);
		});
	});
};

module.exports = sessionSchema;