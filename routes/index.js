const express = require('express');
const authRouter = require('./auth');
const userRouter = require('./user');
const movieRouter = require('./movie');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendStatus(200);
});

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/movies', movieRouter);

module.exports = router;
