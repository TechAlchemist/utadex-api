const express = require('express');
const router = express.Router();
const surveyController = require('../../controllers/survey');

router.post('/createSurvey', surveyController.createSurvey);
router.get('/getAllSurveys', surveyController.getAllSurveys);
router.get('/getSpecificSurvey/:id', surveyController.getSpecificSurvey);
router.put('/updateSurvey/:id', surveyController.updateSurvey);
router.delete('/deleteSurvey/:id', surveyController.deleteSurvey);

module.exports = router;