const Sequelize = require('sequelize');

const Repository = require('../app/models/Repository');

const databaseConfig = require('../config/database');

const models = [Repository];

class Database {
  constructor() {
    this.init();
  }
  
  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

module.exports = new Database();