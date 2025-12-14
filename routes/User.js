const express = require("express");
const router = express.Router();
const passport = require("passport");
const userController = require("../controllers/user");
const { validateSignup, validateLogin, savedUrl, isLoggedIn } = require("../middleware");
const Plan = require("../models/Plans");

router.route('/signup')
    .get(userController.renderSignup)
    .post(validateSignup, userController.signup);
router.route('/login')
    .get(userController.renderLogin)
    .post(validateLogin, savedUrl, passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), userController.login);
router.route('/logout')
    .get(userController.logout);

router.get('/feed', isLoggedIn, userController.showFeed);

module.exports = router;
