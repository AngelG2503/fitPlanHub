const Plan = require('../models/Plans')
const Review = require('../models/review');
const User = require('../models/User');

module.exports.index = async (req, res) => {
    const { category } = req.query;
    let query = {}
    if (category) {
        query.category = category
    }
    const allPlans = await Plan.find(query).populate('trainer');
    res.render('plans/index', { allPlans });

};


module.exports.renderNew = (req, res) => {
    res.render('plans/new');

};

module.exports.create = async (req, res) => {
    const newPlan = new Plan(req.body.plan);
    newPlan.trainer = req.user._id;
    if (!newPlan.image || newPlan.image === "") {
        newPlan.image = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400"
    }
    await newPlan.save();
    req.flash('success', 'Plan created successfully');
    res.redirect(`/plans/${newPlan._id}`);
};


module.exports.show = async (req, res) => {
    const { id } = req.params;
    const plan = await Plan.findById(id)
        .populate('trainer')
        .populate({
            path: 'reviews',
            populate: {
                path: 'author'
            }
        });
    if (!plan) {
        req.flash('error', 'Plan not found');
        return res.redirect('/plans');
    }
    let user = null;
    if (req.user) {
        user = await User.findById(req.user._id).populate('subscriptions.plan');

    }
    res.render('plans/show', { plan });
};

module.exports.renderEdit = async (req, res) => {
    const { id } = req.params;
    const plan = await Plan.findById(id);
    if (!plan) {
        req.flash('error', 'Cannot find that plan');
        return res.redirect("/plans");
    } res.render('plans/edit', { plan });
};



module.exports.update = async (req, res) => {
    const { id } = req.params;
    console.log(req.body);
    console.log(req.body.plan);
    if (req.body.plan && (!req.body.plan.image || req.body.plan.image === "")) {
        delete req.body.plan.image;
    }
    const plan = await Plan.findByIdAndUpdate(id, { ...req.body.plan }, { new: true });
    req.flash('success', 'Plan updated successfully');
    res.redirect(`/plans/${plan._id}`);
}


module.exports.delete = async (req, res) => {
    const { id } = req.params;
    await Plan.findByIdAndDelete(id);
    req.flash('success', 'Plan deleted successfully');
    res.redirect('/plans');
}
