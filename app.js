require("dotenv").config();
const express = require("express");
const path = require('path');
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/User");
const userRoutes = require("./routes/User");
const planRoutes = require("./routes/plan");
const methodOverride = require("method-override");
const subscriptionRoutes = require("./routes/subscription");
const reviewRoutes = require("./routes/review");
const followRoutes = require("./routes/follow");
const trainerRoutes = require("./routes/trainer");





const app = express();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy({ usernameField: 'email' }, User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentUser = req.user;

    next();
})

app.use("/plans", planRoutes);
app.use("/", userRoutes);
app.use("/", subscriptionRoutes);
app.use("/plans/:id/reviews", reviewRoutes);
app.use("/", followRoutes);
app.use('/trainers', trainerRoutes);



mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.listen(3000, () => {
    console.log("Server started on port 3000");
});

