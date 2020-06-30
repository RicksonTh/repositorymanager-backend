'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('repositories', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      contributors: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
        },

      pull_requests: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
        },

      bio_repos: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      } 

    });
    
  },

  down: queryInterface => {
   return queryInterface.dropTable('repositories');
     
  }
};
