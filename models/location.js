const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const locationSchema = new Schema({
    locationName: String,
    locationDescription: String,
    typicalWorkKeyWords: [String],
    associatedCompany: String,
    siteContact: String,
    siteSpecificHazards: String

},
{
    timestamps: true
});

module.exports = mongoose.model('Location', locationSchema);