const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

}

module.exports = new App().server;
