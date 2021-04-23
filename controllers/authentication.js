const Employee = require('../models/employee');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

async function login(req, res) {
    try {
        const user = await Employee.findOne({ email: req.body.email });
        if (!user) return res.status(401).json({"Failure": "Invalid credentials."});
        user.comparePassword(req.body.password, function(error, isMatch) {
            if (isMatch) {
                const token = createJWT(user);
                res.json({ token, user });
            }
            else {
                return res.status(401).json({"Failure": "Invalid credentials."});
            }
        });
    }
    catch(error) {
        return res.status(401).json({"Failure": error});
    }
}

function createJWT(user) {
    return jwt.sign(
        { user },
        SECRET,
        { expiresIn: "60d"}
    );
}

module.exports = {
    login
}