const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to DB successfully');
  } catch (e) {
    console.log('Could not connect to DB');
  }
};

module.exports = connectDB;
