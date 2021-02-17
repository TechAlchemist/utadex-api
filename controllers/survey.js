const Survey = require('../models/survey');

async function getAllSurveys(req, res) {
    console.log('getAllSurveys');
    const allSurveyData = await Survey.find({});

    res.json(allSurveyData);
}

async function createSurvey(req, res) {
    console.log('createSurvey fired')
    const newSurvey = new Survey(req.body);
    console.log(newSurvey)
    try {
        await newSurvey.save();
        console.log('Saving new survey. ');
    }
    catch(error) {
        return res.status(400).json(error);
    }
    finally {
        return res.status(200)
    }
}

module.exports = {
    getAllSurveys,
    createSurvey
}