const Location = require('../models/location');

function createLocation(req, res) {
    const newLocation = new Location(req.body);
    try {
        newLocation.save();
        res.status(200).json({"Success": "Location created."});
    }
    catch(error) {
        return res.status(500).send({"Failure": "Failed to create location."});
    }
}

function getAllLocations(req, res) {
    Location.find({}, (error, locations) => {
        if (error) return res.status(500).json({"Failure": "Error getting all locations."});
        return res.status(200).json(locations);
    });
}

function getSpecificLocation(req, res) {
    Location.findById(req.params.id, function(error, location) {
        if (error) return res.status(500).json({"Failure": "Error getting single location."});
        return res.status(200).json(location);
    });
}

function updateLocation(req, res) { 
    if (!req.body) {
        return res.status(400).json({"Failure": "Request body was empty."});
    }
    else {
        Location.findByIdAndUpdate(req.params.id, req.body, function(error, location) {
            if (error) return res.status(500).json({"Failure": "Failed to update location."});
            return res.status(200).json({"Success": "Location updated."});
        });
    }
}

function deleteLocation(req, res) {
    Location.findByIdAndDelete(req.params.id, function(error, location) {
        if (error) res.status(500).json({"Failure": "Failed to delete location."});
        return res.status(200).json({"Success": "Location deleted."});
    });
}

module.exports = {
    createLocation,
    getAllLocations,
    getSpecificLocation,
    updateLocation,
    deleteLocation
}