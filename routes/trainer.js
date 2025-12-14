const express = require('express');
const router = express.Router();
const trainerController = require('../controllers/trainer');

router.get('/:id', trainerController.showProfile);
router.get("/", trainerController.index);
module.exports = router;