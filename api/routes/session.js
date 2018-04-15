'use strict';
module.exports = function (sessionDb) {
	const express = require('express');
	let router = express.Router();

	const sessionController = require('../controllers/SessionController')(sessionDb);

	router.get('/', sessionController.getAll);
	router.get('/test', sessionController.test);
	router.post('/new', sessionController.create);
	router.delete('/:id', sessionController.deleteSession);

	return router;
};