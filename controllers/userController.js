const bcrypt = require('bcryptjs');
const { getUserById, updateUser } = require('../services/userService');

const getUserHandler = async (req, res) => {
  const userId = req.params.userId;

  const user = await getUserById(userId);

  if (!user) {
    return res.status(404).send({ message: 'No user found' });
  }

  return res.send(user);
};

const updateUserHandler = async (req, res) => {
  const userId = req.params.userId;

  // If requesting user is updating their own profile only then allow
  if (req.user._id === userId) {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password);
    }

    const user = await updateUser(userId, req.body);

    return res.status(200).send({ message: 'User updated successfully', user });
  }

  return res
    .status(403)
    .send({ message: 'You can only update your own profile' });
};

module.exports = {
  getUserHandler,
  updateUserHandler,
};
