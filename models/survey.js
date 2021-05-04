const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const surveySchema = new Schema({
    startTemp: Number,
    endTemp: Number,
    startTime: String,
    endTime: String,
    location: String,
    biologistPresent: [String],
    leadBiologist: String,
    totalUta: Number,
    totalTigris: Number,
    totalGambelia: Number,
    otherSpecies: [String]
},
{
    timestamps: true
});

module.exports = mongoose.model('Survey', surveySchema);