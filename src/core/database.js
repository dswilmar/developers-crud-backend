const mongoose = require('mongoose');
require('dotenv').config();

const url = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`
mongoose.connect(url, {useNewUrlParser: true});
module.exports = mongoose;