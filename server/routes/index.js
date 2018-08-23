const router = require('express').Router();
const authRoutes = require('./auth');
const bookingRoutes = require('./booking');
const imageRoutes = require('./image');
const textRoutes = require('./text');
const menuRoutes = require('./menu');

router.use('/auth', authRoutes);
router.use('/booking', bookingRoutes);
router.use('/image', imageRoutes);
router.use('/text', textRoutes);
router.use('/menu', menuRoutes);

module.exports = router;