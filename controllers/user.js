const User = require("../models/User");
const Plan = require('../models/Plans');
module.exports.renderSignup = (req, res) => {
    res.render("users/signup");
};
module.exports.signup = async (req, res) => {
    try {
        const { name, role, email, password } = req.body;
        const newUser = new User({ email, name, role });

        await User.register(newUser, password);

        req.login(newUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to FitPlanHub")
            res.redirect("/plans");
        });
    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }



};

module.exports.renderLogin = (req, res) => {
    res.render("users/login");
};
module.exports.login = async (req, res) => {
    req.flash("success", "Welcome Back!");
    let redirectUrl = res.locals.redirectUrl || "/plans";
    res.redirect(redirectUrl);
};

module.exports.logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
    });
    req.flash("success", "Logged Out Successfully!");
    res.redirect("/plans");
};

module.exports.showFeed = async (req, res) => {
    const user = await User.findById(req.user._id).populate('following');
    const followedTrainerIds = user.following.map(t => t._id);

    const plans = await Plan.find({ trainer: { $in: followedTrainerIds } })
        .populate('trainer')
        .sort({ createdAt: -1 });

    const subscribedPlanIds = user.subscriptions.map(sub => sub.plan.toString());

    res.render('users/feed', { plans, user, subscribedPlanIds });
};


module.exports.showFollowing = async (req, res) => {
    const user = await User.findById(req.user._id).populate('following');
    res.render('users/following', { following: user.following });
};
