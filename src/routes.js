
const express = require('express');
const routes = express.Router();
const playerController = require('./controller/playerController');



routes.post('/player', playerController.create)
module.exports = routes;