const jwt = require('jsonwebtoken');

const signAccessToken = (user) => {
  const accessToken = jwt.sign(
    { _id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1w' }
  );

  return accessToken;
};

module.exports = {
  signAccessToken,
};
