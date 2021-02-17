const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const intakeSchema = new Schema({

    firstName: String,
    lastName: String,
    email: String,
    companyName: String,
    trainingType: String
},
{
    timestamps: true
});

module.exports = mongoose.model('trainingIntakes', intakeSchema);