const express = require('express');
const router = express.Router();
const intakeController = require('../../controllers/intake');

router.get('/intakeData', intakeController.getAllIntakeData);
router.post('/submitSingleSignature', intakeController.signIntake);

module.exports = router;