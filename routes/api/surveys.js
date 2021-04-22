const express = require('express');
const router = express.Router();
const surveyController = require('../../controllers/survey');

router.get('/survey-data', surveyController.getAllSurveys);
router.post('/submit-survey', surveyController.createSurvey);

module.exports = router;