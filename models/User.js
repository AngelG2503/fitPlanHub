const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose").default;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ["user", "trainer"],
        required: true
    },
    subscriptions: [{
        plan: {
            type: Schema.Types.ObjectId,
            ref: 'Plan'
        },
        purchasedAt: {
            type: Date,
            default: Date.now
        }
    }],
    following: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    followers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]

});

userSchema.plugin(passportLocalMongoose, {
    usernameField: 'email'
});
module.exports = mongoose.model("User", userSchema);
