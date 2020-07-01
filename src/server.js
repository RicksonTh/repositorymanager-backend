const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect(
  "mongodb+srv://dev-rick:rcts1721@cluster0.obamc.mongodb.net/repository-manager?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
);

app.listen(3333);