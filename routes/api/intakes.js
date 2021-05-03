const express = require('express');
const router = express.Router();
const intakeController = require('../../controllers/intake');

router.post('/createIntake', intakeController.createIntake);
router.get('/getSingleIntake/:id', intakeController.getSingleIntake);
// specify a batch of intake signatures by training location
router.get('/getBatchIntakes/:training', intakeController.getSpecifiedBatchIntakes);
router.get('/getAllIntakes', intakeController.getAllIntakes);
router.put('/updateIntake/:id', intakeController.updateIntake);
router.delete('/deleteIntake/:id', intakeController.deleteIntake);


module.exports = router;