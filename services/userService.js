const User = require('../models/user');

const getUserById = async (id) => {
  const user = await User.findById(id);
  return user;
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({ email });

  return user;
};

const addUser = async (user) => {
  const newUser = new User(user);
  await newUser.save();

  return newUser;
};

const updateUser = async (id, update) => {
  const user = await User.findByIdAndUpdate(
    id,
    { $set: update },
    { new: true }
  );

  return user;
};

module.exports = {
  getUserById,
  getUserByEmail,
  addUser,
  updateUser,
};
