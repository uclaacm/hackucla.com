'use strict';

/**
 * Defines /user endpoint methods
 * @param {Mongoose.Model} MongoDB Team model
 */
module.exports = function (Team) { // eslint-disable-line
	function getAll(req, res, next) {
		Team.getAll()
			.then(teams => res.json(teams))
			.catch(error => {
				return next(error);
			});
	}

	function find(req, res, next) {
		if (req.query.id) {
			Team.getById(req.query.id)
				.then(team => res.json(team))
				.catch(error => {
					return next(error);
				});
		} else if (req.query.name) {
			Team.getByName(req.query.name)
				.then(team => res.json(team))
				.catch(error => {
					return next(error);
				});
		}
	}

	function create(req, res, next) {
		Team.create(req.body.name, req.body.members)
			.then(team => res.json(team))
			.catch(error => {
				return next(error);
			});
	}

	function addMember(req, res, next) {
		Team.getById(req.params.id)
			.then(team => team.addMember(req.body.id))
			.then(team => res.json(team))
			.catch(error => {
				return next(error);
			});
	}

	function removeMember(req, res, next) {
		Team.getById(req.params.id)
			.then(team => team.removeMember(req.body.id))
			.then(team => res.json(team))
			.catch(error => {
				return next(error);
			});
	}

	function test(req, res) {
		res.json('/team/test endpoint hit');
	}

	return {
		getAll,
		find,
		create,
		addMember,
		removeMember,
		test
	};
};