const { Router } = require('express')

const routes = new Router;

const PostagensController = require('./controllers/PostagensController');

routes.get("/postagens", PostagensController.indexAction);

module.exports = routes;