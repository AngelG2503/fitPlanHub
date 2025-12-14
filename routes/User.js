const express = require("express");
const router = express.Router();
const passport = require("passport");
const userController = require("../controllers/user");
const { validateSignup, validateLogin, savedUrl } = require("../middleware");

router.route('/signup')
    .get(userController.renderSignup)
    .post(validateSignup, userController.signup);
router.route('/login')
    .get(userController.renderLogin)
    .post(validateLogin, savedUrl, passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), userController.login);
router.route('/logout')
    .get(userController.logout);

module.exports = router;
