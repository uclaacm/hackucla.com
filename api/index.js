'use strict';

const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const cors = require('cors');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors({
	credentials: true,
	origin: true
}));

const config = require('./config');

// Connect to database
let { User, Team, Session } = require('./models');

// Set up router endpoints
const userRouter = require('./routes/user')(User);
app.use('/user', userRouter);
const teamRouter = require('./routes/team')(Team);
app.use('/team', teamRouter);
const sessionRouter = require('./routes/session')(Session);
app.use('/session', sessionRouter);

server.listen(config.server.port, () => {
	console.log('Listening on port ' + config.server.port);
});
