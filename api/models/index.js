'use strict';

// Bring Mongoose into the app 
const mongoose = require('mongoose');
const config = require('../config');

// Build the connection string 
const dbURI = config.database.uri;

// Create the database connection 
mongoose.connect(dbURI);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', () => {
	console.log('Mongoose default connection open to ' + dbURI);
});

// If the connection throws an error
mongoose.connection.on('error', (err) => {
	console.log('Mongoose default connection error: ' + err);
});

let User = mongoose.model('User', require('./schema/user'));
let Team = mongoose.model('Team', require('./schema/team'));
let Session = mongoose.model('Session', require('./schema/session'));

module.exports = { ShowcaseProject, Session, Event, Email, User, Team };