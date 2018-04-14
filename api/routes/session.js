'use strict';
module.exports = function (sessionDb) {
	const express = require('express');
	let router = express.Router();

	const sessionController = require('../controllers/SessionController')(sessionDb);

	router.get('/test', sessionController.test);

	return router;
};