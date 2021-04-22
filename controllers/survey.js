const Survey = require('../models/survey');

function createSurvey(req, res) {
    const newSurvey = new Survey(req.body);
    try {
        newSurvey.save();
        res.status(200).json({'status': 'successful'});
    }
    catch(error) {
        return res.status(500).send({"message": "failed to create survey"});
    }
}

function getAllSurveys(req, res) {
    Survey.find({}, (error, surveys) => {
        return res.json(surveys);
    });
}

function getSpecificSurvey(req, res) {

}

function updateSurvey(req, res) { 

}

function deleteSurvey(req, res) {
    
}

module.exports = {
    getAllSurveys,
    createSurvey
}