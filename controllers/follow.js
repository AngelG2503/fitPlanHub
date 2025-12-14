const User = require("../models/User");

module.exports.follow = async (req, res) => {
    const { trainerId } = req.params;
    const user = await User.findById(req.user._id);
    const trainer = await User.findById(trainerId);

    if (!trainer || trainer.role !== 'trainer') {
        req.flash('error', 'Trainer not found');
        return res.redirect('/plans');
    }

    if (user.following.includes(trainerId)) {
        req.flash('error', 'Already following this trainer');
        return res.redirect(`/trainers/${trainerId}`);
    }

    user.following.push(trainerId);
    trainer.followers.push(req.user._id);
    await user.save({ validateModifiedOnly: true });
    await trainer.save({ validateModifiedOnly: true });

    req.flash('success', 'Successfully followed trainer!');
    res.redirect(`/trainers/${trainerId}`);
};

module.exports.unfollow = async (req, res) => {
    const { trainerId } = req.params;
    await User.findByIdAndUpdate(req.user._id, { $pull: { following: trainerId } });
    await User.findByIdAndUpdate(trainerId, { $pull: { followers: req.user._id } });

    req.flash('success', 'Unfollowed trainer');
    res.redirect(`/trainers/${trainerId}`);
}