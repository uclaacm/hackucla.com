'use strict';

/**
 * Defines /user endpoint methods
 * @param {Mongoose.Model} MongoDB User model
 */
module.exports = function(User) { // eslint-disable-line
	function index(req, res) {
		res.json('/ endpoint hit');
	}

	function getName(req, res) {
		res.json('Joe Bruin');
	}

	return {
		index,
		getName
	};
};