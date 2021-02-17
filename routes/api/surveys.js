const express = require('express');
const router = express.Router();
const surveyController = require('../../controllers/survey');

router.get('/surveyData', surveyController.getAllSurveys);
router.post('/submitSurvey', surveyController.createSurvey);

module.exports = router;