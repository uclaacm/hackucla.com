'use strict';
module.exports = function(userDb) {
	const express = require('express');
	let router = express.Router();

	const userController = require('../controllers/UserController')(userDb);

	router.get('/', userController.index);
	router.get('/name', userController.getName);

	return router;
};