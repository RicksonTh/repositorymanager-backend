const { Router } = require('express');
const axios = require('axios');

const Repository = require('./app/models/Repository');
const RepositoryController = require('./app/controllers/RepositoryController')


const routes = new Router();

routes.get('/repos', async (req, res) => {
  const { github_username } = req.body;
  
    const apiRes = await axios.get(
      `https://api.github.com/users/${github_username}/repos`
      );

      return res.json(apiRes.data);
});
routes.get('/repos/saves', RepositoryController.index);
routes.post('/repos', RepositoryController.store);
routes.delete('/repos', RepositoryController.delete);

module.exports = routes;