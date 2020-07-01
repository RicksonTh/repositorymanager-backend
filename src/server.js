const app = require('./app');
const mongoose = require('mongoose');
require ('dotenv/config');

mongoose.connect(
  process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
);

app.listen(process.env.PORT || 3333);