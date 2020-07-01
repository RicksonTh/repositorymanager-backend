const axios = require("axios");
const Repository = require("../models/Repository");

module.exports = {
  async index(req, res) {
    const repositories = await Repository.find();

    return res.json(repositories);
  },

  async store(req, res) {
    const { github_username, repos } = req.body;
    
    let repository = await Repository.findOne({ github_username });

    if(repository) {
      return res.json('Repository already exists!')
    }
    
    if (!repository) {
      const apiRes = await axios.get(
        `https://api.github.com/users/${github_username}/repos`
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
      github_username,
      description_repos: description,
      contributors_repos: contributorsSelected,
      pull_requests: pullsSelected,
    }); 
    }

    return res.send({ repository });
  },

  async update(req, res) {
    const { github_username, name, latitude, longitude, techs } = req.query;

    let dev = await Dev.findOne({ github_username });

    const techsArray = techs.split(",").map(techs => techs.trim());

    const location = {
      type: "Point",
      coordinates: [longitude, latitude]
    };

    dev = await Dev.update({
      name,
      techs: techsArray,
      location
    });

    return res.send({ message: "Dev atualizado com sucesso!" });
  },

  async delete(req, res) {
    const { github_username } = req.params;

    let repository = await Repository.findOne({ github_username });

    if(!repository) {
      return res.json({ message: 'Repository has already been deleted!'})
    }

    repository = await Repository.deleteOne({ github_username: github_username });

    return res.send({ message: "Successfully deleted repository!" });
  }
};