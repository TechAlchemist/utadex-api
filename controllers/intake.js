// Training Intake Form Controller

const Intake = require('../models/intake');

function createIntake(req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        return res.status(400).json({"Failure": "Request body was empty."});
    }
    const intake = new Intake(req.body);
    try {
        intake.save();
        return res.status(200).json({"Success": "Intake signature created."});
    }
    catch(error) {
        return res.status(500).json({"Failure": "Failed to create intake signature."});
    }
}

function getSingleIntake(req, res) {
    Intake.findById(req.params.id, function(error, intake) {
        if (error) return res.status(500).json({"Failure": "Internal error retrieving intake."});
        return res.status(200).json(intake);
    })
}

function getSpecifiedBatchIntakes(req, res) {
    Intake.find({"trainingType": req.params.training}, function(error, intakes) {
        if (error) return res.status(500).json({"Failure": "Error retrieving intakes."});
        return res.status(200).json(intakes);
    });
}

function getAllIntakes(req, res) {
    Intake.find({}, function(error, intakes) {
        if (error) return res.status(500).json({"Failure": "Failed to get all intake signatures. "});
        return res.status(200).json(intakes);
    });
}

function updateIntake(req, res) {
    Intake.findByIdAndUpdate(req.params.id, function(error, intake) {
        if (error) return res.status(500).json({"Failure": "Failed to update intake."});
        return res.status(200).json({"Success": "Intake updated."});
    });
}

function deleteIntake(req, res) {
    Intake.findByIdAndDelete(req.params.id, function(error, intake) {
        if (error) res.status(500).json({"Failure": "Failed to delete intake."});
        return res.status(200).json({"Success": "Intake deleted."});
    });
}

module.exports = {
    createIntake,
    getSingleIntake,
    getSpecifiedBatchIntakes,
    getAllIntakes,
    updateIntake,
    deleteIntake

};