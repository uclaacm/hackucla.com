'use strict';

/**
 * Defines /user endpoint methods
 * @param {Mongoose.Model} MongoDB Session model
 */
module.exports = function (Session) { // eslint-disable-line
	function getAll(req, res, next) {
		Session.getAll()
			.then(sessions => res.json(sessions))
			.catch(error => {
				return next(error);
			});
	}

	function create(req, res, next) {
		Session.init()
			.withName(req.body.name)
			.withDescription(req.body.description)
			.withImage(req.body.image)
			.withDateRange(req.body.startDate, req.body.endDate)
			.withSourceCodeLink(req.body.sourceCodeLink)
			.withSlidesLink(req.body.slidesLink)
			.withVideoLink(req.body.videoLink)
			.withSubmissionLink(req.body.submissionLink)
			.build()
			.then(session => res.json(session))
			.catch(error => {
				return next(error);
			});
	}

	function deleteSession(req, res, next) {
		Session.delete(req.params.id)
			.then(res.status(200).end())
			.catch(error => {
				return next(error);
			});
	}

	function test(req, res) {
		res.json('/session/test endpoint hit');
	}

	return {
		getAll,
		create,
		deleteSession,
		test
	};
};