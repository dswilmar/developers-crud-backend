const mongoose = require('../core/database');
const Schema = mongoose.Schema;

const DeveloperSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        enum: ['M', 'F'],
        required: true
    },
    age: {
        type: Number,
        min: 18,
        required: true
    },
    hobby: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Developer', DeveloperSchema);