const express = require('express');
const router = express.Router();
const locationController = require('../../controllers/location');

router.post('/createLocation', locationController.createLocation);
router.get('/getAllLocations', locationController.getAllLocations);
router.get('/getSpecificLocation/:id', locationController.getSpecificLocation);
router.put('/updateLocation/:id', locationController.updateLocation);
router.delete('/deleteLocation/:id', locationController.deleteLocation);


module.exports = router;