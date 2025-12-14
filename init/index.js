const mongoose = require('mongoose');
const Plan = require('../models/Plans');
const initData = require('./data');

const MONGO_URL = "mongodb://127.0.0.1:27017/fitplanhub";

main()
    .then(() => {
        console.log("Database Connected");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Plan.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, trainer: "693e8e60793977cfc50f33ab" }))
    await Plan.insertMany(initData.data);
    console.log("Data Inserted");
};

initDB();