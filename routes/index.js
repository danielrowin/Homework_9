const express = require('express');
const router = express.Router();
const userRoutes = require('./users');
const movieRoutes = require('./movies');

router.use('/users', userRoutes);
router.use('/movies', movieRoutes);

module.exports = router;
