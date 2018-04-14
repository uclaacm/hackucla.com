'use strict';
module.exports = function(userDb) {
	const express = require('express');
	let router = express.Router();

	const userController = require('../controllers/UserController')(userDb);

	router.get('/', userController.index);
    router.get('/name', userController.getName);
    router.get('/:profileId', userController.findByProfileId);
    router.post('/new', userController.create);
    router.delete('/:id', userController.deleteUser);

	return router;
};