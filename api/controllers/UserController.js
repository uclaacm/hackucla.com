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

    function create(req, res) {
        User.create(req.body.name, req.body.profileId)
            .then(user => {
                console.log(user);
                res.json(user);
            })
            .catch(error => {
                console.error(error);
                res.status(404).end();
            });
    }

    return {
        index,
        getName,
        create
    };
};