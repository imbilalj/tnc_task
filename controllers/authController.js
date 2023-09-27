const bcrypt = require('bcryptjs');
const { signAccessToken } = require('../services/authService');
const { addUser, getUserByEmail } = require('../services/userService');

const loginHandler = async (req, res) => {
  const { email, password } = req.body;

  const user = await getUserByEmail(email);

  if (!user) {
    return res.status(404).send({ message: 'No user found' });
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    return res.status(400).send({ message: 'Invalid credentials' });
  }

  // Sign a JWT token
  const accessToken = signAccessToken(user);

  res.status(200).send({ accessToken, user });
};

const registerHandler = async (req, res) => {
  const user = await addUser(req.body);

  res.send({ message: 'User registered successfully', user });
};

module.exports = { loginHandler, registerHandler };
