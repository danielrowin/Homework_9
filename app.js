const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('./models');

const app = express();
app.use(bodyParser.json());
app.use(morgan('combined'));

// Sync database
db.sequelize.sync();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;
