const { signupSchema, loginSchema } = require("./schema.js");
const ExpressError = require("./utils/ExpressError");
const Plan = require("./models/Plans");

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in first!");
        return res.redirect("/login");
    }
    next();
};

module.exports.validateSignup = (req, res, next) => {
    console.log("request body:", req.body);
    const { error } = signupSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(", ");
        console.log("validation error:", msg);
        throw new ExpressError(400, msg);
    }
    next();
};

module.exports.savedUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;

    }
    next();
};

module.exports.validateLogin = (req, res, next) => {
    const { error } = loginSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(", ");
        throw new ExpressError(400, msg);
    }
    next();
};

module.exports.isTrainer = (req, res, next) => {
    if (req.user.role !== "trainer") {
        req.flash("error", "You are not authorized to perform this action!")
        return res.redirect("/plans");
    }
    next();
};

module.exports.isPlanAuthor = async (req, res, next) => {
    const { id } = req.params;
    const plan = await Plan.findById(id);

    if (!plan) {
        req.flash("error", "Cannot find that plan!")
        return res.redirect("/plans");
    }
    if (!plan.trainer.equals(req.user._id)) {
        req.flash("error", "You ado not have permission to do that!")
        return res.redirect(`/plans/${plan._id}`);
    }
    next();
};