const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middleware");
const User = require("../models/User");
const Plan = require("../models/Plans");


router.post("/plans/:id/subscribe", isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(req.user._id);
    const alreadySubscribed = user.subscriptions.some(sub => sub.plan.equals(id));
    if (alreadySubscribed) {
        req.flash("error", "You are already subscribed to this plan");
        return res.redirect(`/plans/${id}`);
    }

    user.subscriptions.push({ plan: id });
    await user.save();
    req.flash("success", "Successfully subscribed to the plan");
    res.redirect(`/plans/${id}`);
})

module.exports = router;