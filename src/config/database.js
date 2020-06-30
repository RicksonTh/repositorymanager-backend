module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'repositorymanager',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
