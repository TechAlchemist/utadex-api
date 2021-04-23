const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

employeeSchema.set('toJSON', {
    transform: function(doc, ret) {
        delete ret.password;
        return ret;
    }
});

const SALT_ROUNDS = 6;

employeeSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, SALT_ROUNDS, function(error, hash) {
        if (error) return next(error);
        user.password = hash;
        next();
    });
});

employeeSchema.methods.comparePassword = function(tryPassword, callback) {
    bcrypt.compare(tryPassword, this.password, callback);
};

module.exports = mongoose.model('Employee', employeeSchema);