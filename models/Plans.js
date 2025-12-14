const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['Weight-loss', 'Muscle-gain', 'Strength', 'Cardio', 'Flexibility', 'Yoga', 'Beginner', 'Advanced', 'Home-workout', 'Gym'],
        required: true
    },
    difficulty: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced'],
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        default: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400'
    },
    trainer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }],
}, {
    timestamps: true
}

);
module.exports = mongoose.model('Plan', planSchema)