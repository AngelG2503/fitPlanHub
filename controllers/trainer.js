const User = require('../models/User');
const Plan = require('../models/Plans');

module.exports.showProfile = async (req, res) => {
    const { id } = req.params;
    const trainer = await User.findById(id).populate('followers');

    if (!trainer || trainer.role !== 'trainer') {
        req.flash('error', 'Trainer not found');
        return res.redirect('/plans');
    }

    const plans = await Plan.find({ trainer: id });

    let isFollowing = false;
    if (req.user) {
        const currentUser = await User.findById(req.user._id);
        isFollowing = currentUser.following.includes(id);
    }

    res.render('trainers/show', { trainer, plans, isFollowing });
}