const { Router } = require('express');
const Repository = require('./app/models/Repository');
const RepositoryController = require('./app/controllers/RepositoryController')

const routes = new Router();

routes.get('/repositories', RepositoryController.index);
routes.post('/repositories', RepositoryController.store);

module.exports = routes;