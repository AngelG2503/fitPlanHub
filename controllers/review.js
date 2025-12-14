const Plan = require("../models/Plans");
const Review = require("../models/review");

module.exports.postReviews = async (req, res) => {
    const plan = await Plan.findById(req.params.id);
    const newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    plan.reviews.push(newReview);
    await newReview.save();
    await plan.save({ validateModifiedOnly: true });
    req.flash("success", "Review added successfully!");
    res.redirect(`/plans/${plan._id}`);
}

module.exports.deleteReview = async (req, res) => {
    const { id, reviewId } = req.params;
    await Plan.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review deleted successfully!");
    res.redirect(`/plans/${id}`);
}