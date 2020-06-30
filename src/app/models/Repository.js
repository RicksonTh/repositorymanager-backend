const Sequelize = require('sequelize')
const { Model } = require('sequelize');

class Repository extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        contributors: Sequelize.JSON,
        pull_requests: Sequelize.JSON,
        bio_repos: Sequelize.STRING,
      },

      {
        sequelize,
      }
    );
  }
}

module.exports = Repository;