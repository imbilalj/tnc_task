const roleAuthMiddleware = (allowedRoles) => {
  return (req, res, next) => {
    const requestingUserRole = req.user.role;

    if (allowedRoles.includes(requestingUserRole)) {
      // Allow
      next();
    } else {
      res.status(403).send({ message: 'Forbidden' });
    }
  };
};

module.exports = roleAuthMiddleware;
