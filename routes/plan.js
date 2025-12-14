const express = require("express");
const router = express.Router();
const planController = require("../controllers/plan");
const { isLoggedIn, isTrainer, isPlanAuthor } = require("../middleware");

router.route('/')
    .get(planController.index)
    .post(isLoggedIn, isTrainer, planController.create);

router.route('/new')
    .get(isLoggedIn, isTrainer, planController.renderNew);

router.route('/:id')
    .get(planController.show)
    .put(isLoggedIn, planController.update)
    .delete(isLoggedIn, planController.delete);

router.route('/:id/edit')
    .get(isLoggedIn, planController.renderEdit);

module.exports = router;