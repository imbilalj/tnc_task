const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./utils/db');
const router = require('./routes');

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.use('/', router);

app.listen(5000, () => {
  console.log('App is listening on port 5000');
});
