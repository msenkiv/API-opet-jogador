
const express = require('express');
const routes = express.Router();
const playerController = require('./controller/playerController');



routes.post('/player', playerController.create)
routes.get('/player/nickname/:nickname', playerController.find)

module.exports = routes;