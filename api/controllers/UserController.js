'use strict';

const User = require('../models/schemas/user'); // eslint-disable-line

function index(req, res) {
	res.json('/ endpoint hit');
}

function getName(req, res) {
	res.json('Joe Bruin');
}

module.exports = {
	index,
	getName
};