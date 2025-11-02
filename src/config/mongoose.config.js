const mongoose = require('mongoose');
require('dotenv').config({quiet: true});

const DB_HOST = process.env.DB_HOST;
mongoose.connect(DB_HOST)
    .then(() => console.log(`Connecting to the MongoDB was successfully`))
    .catch((err) => console.log(`Connecting to the MongoDB failed`))

