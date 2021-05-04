const Survey = require('../models/survey');

function createSurvey(req, res) {
    const newSurvey = new Survey(req.body);
    try {
        newSurvey.save();
        res.status(200).json({"Success": "Survey created."});
    }
    catch(error) {
        return res.status(500).send({"Failure": "Failed to create survey."});
    }
}

function getAllSurveys(req, res) {
    Survey.find({}, (error, surveys) => {
        if (error) return res.status(500).json({"Failure": "Error getting all surveys."});
        return res.status(200).json(surveys);
    });
}

function getSpecificSurvey(req, res) {
    Survey.findById(req.params.id, function(error, survey) {
        if (error) return res.status(500).json({"Failure": "Error getting single survey."});
        return res.status(200).json(survey);
    });
}

function updateSurvey(req, res) { 
    if (!req.body) {
        return res.status(400).json({"Failure": "Request body was empty."});
    }
    else {
        Survey.findByIdAndUpdate(req.params.id, req.body, function(error, survey) {
            if (error) return res.status(500).json({"Failure": "Failed to update survey."});
            return res.status(200).json({"Success": "Survey updated."});
        });
    }
}

function deleteSurvey(req, res) {
    Survey.findByIdAndDelete(req.params.id, function(error, survey) {
        if (error) res.status(500).json({"Failure": "Failed to delete survey."});
        return res.status(200).json({"Success": "Survey deleted."});
    });
}

module.exports = {
    createSurvey,
    getAllSurveys,
    getSpecificSurvey,
    updateSurvey,
    deleteSurvey
}