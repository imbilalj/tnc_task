const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const {
  getUserHandler,
  updateUserHandler,
} = require('../controllers/userController');

const router = express.Router();

router.get('/:userId/profile', getUserHandler);

// Authenticated Route
router.put('/:userId/profile', authMiddleware, updateUserHandler);

module.exports = router;
