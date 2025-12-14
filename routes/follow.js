const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware');
const followController = require('../controllers/follow');

router.post("/trainers/:trainerId/follow", isLoggedIn, followController.follow);
router.post("/trainers/:trainerId/unfollow", isLoggedIn, followController.unfollow);

module.exports = router;
