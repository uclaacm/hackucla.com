'use strict';

/**
 * Defines /user endpoint methods
 * @param {Mongoose.Model} MongoDB Session model
 */
module.exports = function (Session) { // eslint-disable-line
	function test(req, res) {
		res.json('/session/test endpoint hit');
	}

	return {
		test
	};
};