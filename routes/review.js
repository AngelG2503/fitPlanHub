const express = require("express");
const router = express.Router({ mergeParams: true });
const { isLoggedIn } = require("../middleware");
const reviewController = require("../controllers/review");


router.post("/", isLoggedIn, reviewController.postReviews);

router.delete("/:reviewId", isLoggedIn, reviewController.deleteReview);

module.exports = router;