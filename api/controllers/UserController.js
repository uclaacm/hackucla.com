'use strict';

/**
 * Defines /user endpoint methods
 * @param {Mongoose.Model} MongoDB User model
 */
module.exports = function (User) { // eslint-disable-line
	function index(req, res) {
		res.json('/ endpoint hit');
	}

	function getName(req, res) {
		res.json('Joe Bruin');
	}

	function create(req, res, next) {
		User.create(req.body.name, req.body.profileId)
			.then(user => res.json(user))
			.catch(error => {
				return next(error);
			});
	}

	function findByProfileId(req, res, next) {
		let profileId = req.params.profileId;
		User.findByProfileId(profileId)
			.then(user => res.json(user))
			.catch(error => {
				return next(error);
			});
	}

	function deleteUser(req, res, next) {
		User.delete(req.params.id)
			.then(res.status(200).end())
			.catch(error => {
				return next(error);
			});
	}

	return {
		index,
		getName,
		create,
		findByProfileId,
		deleteUser
	};
};