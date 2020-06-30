const Repository = require('../models/Repository');

class RepositoryController {
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