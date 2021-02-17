const Intake = require('../models/intake');

async function getAllIntakeData(req, res) {
    console.log('Fired here. ');
    const allIntakeData = await Intake.find({});
    
    res.json(allIntakeData);
}

// trainee signing intake form
async function signIntake(req, res) {
    const intakeSignature = new Intake(req.body);
    console.log(intakeSignature)
    try {
        await intakeSignature.save();
        console.log('signature saved')
    }
    catch(error) { // bad request; preceived client error
        res.status(400).json(error);
    }
}

module.exports = {
    getAllIntakeData,
    signIntake
};