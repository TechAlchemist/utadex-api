const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const locationSchema = new Schema({
    locationName: String,
    locationDescription: String,
    keyWords: [String],
    lat: String,
    long: String,
    associatedCompany: String,
    siteContactName: String,
    siteContactEmail: String,
    siteContactPhoneNumber: String,
    siteSpecificHazards: String

},
{
    timestamps: true
});

module.exports = mongoose.model('Location', locationSchema);