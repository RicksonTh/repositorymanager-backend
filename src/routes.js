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
routes.delete('/repos/:github_username', RepositoryController.delete);


routes.get('/repos/orgs', async (req, res) => {
  const { github_username } = req.body;

  const apiRes = await axios.get(
    `https://api.github.com/orgs/${github_username}/repos`
  );

  return res.json(apiRes.data);
});
routes.post('/repos/orgs', async (req, res) => {
  const { github_username, repos } = req.body;
  
  let repository = await Repository.findOne({ github_username });
  
  if (!repository) {
    const apiRes = await axios.get(
      `https://api.github.com/orgs/${github_username}/repos`
      );

    const contributorsRes = await axios.get(
      `https://api.github.com/repos/${github_username}/${repos}/contributors`
    );

    const contributors = contributorsRes.data;

    const contributorsSelected = contributors.slice(0,3)

    const pullsRes = await axios.get(
      `https://api.github.com/repos/${github_username}/${repos}/pulls`
    );

    const pulls = pullsRes.data;

    const pullsSelected = pulls.slice(0,3)

    const { name, description} = apiRes.data;

  repository = await Repository.create({
    title: name,
    github_username: github_username,
    description_repos: description,
    contributors_repos: contributorsSelected,
    pull_requests: pullsSelected,
  }); 
  }

  return res.send({ repository });
},);
routes.delete('/repos/orgs', async (req, res) => {
  const { github_username } = req.query;

    let repository = await Repository.findOne({ github_username });

    repository = await Repository.deleteOne({ github_username: github_username });

    return res.send({ message: "Successfully deleted repository!" });
});

module.exports = routes;