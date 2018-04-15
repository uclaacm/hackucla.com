'use strict';
module.exports = function (app, User) {
	const express = require('express');
	let router = express.Router();
	const passport = require('passport');
	var GoogleStrategy = require('passport-google-oauth20').Strategy;
	const session = require('express-session');

	// Initialize user session
	app.use(session({
		secret: 'deadbeef 314',
		resave: true,
		saveUninitialized: true
	}));
	app.use(passport.initialize());
	app.use(passport.session());

	let secret;
	try {
		// Obtained from https://drive.google.com/file/d/1e3tjwNCmVKDSbbMNiXCUttSY7oBAfNuR/view?usp=sharing
		secret = require('../config/secret-hackuclacom-google');
	} catch (e) {
		throw `${e}\n*** You are missing the Google OAuth API usage keys. Please go to https://drive.google.com/file/d/1e3tjwNCmVKDSbbMNiXCUttSY7oBAfNuR/view?usp=sharing, download secret-hackuclacom.json, and move it into api/config/`;
	}

	if (secret) {
		passport.use(new GoogleStrategy({
			clientID: secret.web.client_id,
			clientSecret: secret.web.client_secret,
			callbackURL: '/auth/google/callback'
		}, function (token, tokenSecret, profile, done) {
			User.findByProfileId(profile.id).then(user => {
				if (!user) {
					User.create(profile.displayName, profile.id).then(user => {
						// TODO: redirect to user to profile page
						return done(null, user);
					});
				} else {
					return done(null, user);
				}
			});
		}));
	}

	passport.serializeUser(function (user, done) {
		done(null, user);
	});

	passport.deserializeUser(function (user, done) {
		done(null, user);
	});

	// TODO: Create controller to handle passport things
	router.get('/google', passport.authenticate('google', {
		scope: ['https://www.googleapis.com/auth/plus.login'],
		successRedirect: 'http://localhost:3000/',
		failureRedirect: '/auth/google',
		failureFlash: true
	}));

	router.get('/google/callback',
		passport.authenticate('google', { failureRedirect: '/auth/google' }),
		(req, res) => {
			res.redirect(req.session.returnTo || 'http://localhost:3000');
			delete req.session.returnTo;
		}
	);

	return router;
};