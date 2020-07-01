const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
);

app.listen(progress.env.PORT || 3333);