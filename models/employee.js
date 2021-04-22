const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    firstName: String,
    lastName: String,
    title: String,
    email: String,
    password: String,
    phoneNumber: String,
    emergencyContact1: {
        contactName: String,
        contactRelationship: String,
        contactPhoneNumber: String
    },
    emergencyContact2: {
        contactName: String,
        contactRelationship: String,
        contactPhoneNumber: String 
    },
    historicalCounts: {
        uta: Number,
        tigris: Number,
        gambelia: Number,
        Sjas: Number
    },
    isAdmin: Boolean
},
{
    timestamps: true
});

module.exports = mongoose.model('Employee', employeeSchema);