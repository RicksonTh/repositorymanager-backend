const Repository = require('../models/Repository');
const axios = require('axios');

class RepositoryController {

  async index(req, res) {
    const apiRes = await axios.get('https://api.github.com/users/RicksonTh/repos');

    const userRepos = apiRes.data;

    return res.json({userRepos});
  }

  async store(req, res) {
    let contributorsArray = techs.split(",").map(contributors => contributors.trim());
    let pullRequestsArray = techs.split(",").map(contributors => contributors.trim());

    const {id, title, contributors, pull_requests, bio_repos } = await Repository.create(req.body);

    return res.json({
      id, 
      title, 
      contributors, 
      pull_requests, 
      bio_repos
    });
  }
}

module.exports = new RepositoryController();