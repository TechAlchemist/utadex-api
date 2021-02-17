const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const surveySchema = new Schema({
    startTemp: Number,
    startTime: Date,
    location: String,
    biologistPresent: [String],
    totalUta: Number,
    totalTigris: Number,
    totalGambelia: Number
},
{
    timestamps: true
});

module.exports = mongoose.model('Survey', surveySchema);