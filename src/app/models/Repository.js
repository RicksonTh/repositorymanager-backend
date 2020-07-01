const mongoose = require("mongoose");

const RepositorySchema = new mongoose.Schema({
  title: String,
  github_username: String,
  description_repos: String,
  contributors_repos: [Object],
  pull_requests: [Object],
});

module.exports = mongoose.model("Repository", RepositorySchema);