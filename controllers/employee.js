const Employee = require('../models/employee');

function createEmployee(req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        return res.status(400).json({"Failure": "Request body was empty."});
    }
    const employee = new Employee(req.body);
    try {
        employee.save();
        return res.status(200).json({"Success": "Employee created."});
    }
    catch(error) {
        return res.status(500).json({"Failure": "Failed to create employee."});
    }
}

function getAllEmployees(req, res) {
    Employee.find({}, function(error, employees) {
        return res.json(employees);
    });
}

function getSingleEmployee(req, res) {
    let id = req.params.id;
    Employee.findById(id, function(error, employee) {
        return res.json(employee);
    });
}

function updateEmployee(req, res) {
    if (!req.body) {
        return res.status(400).json({"Failure": "Request body was empty."});
    } 
    else {
        Employee.findByIdAndUpdate(req.params.id, req.body, function(error, data) {
            if (error) {
                return res.status(500).json({"Failure": error})
            }
            else {
                return res.status(200).json({"Success" : "Employee updated."})
            }
        });
    }
}

function deleteEmployee(req, res) {
    Employee.findByIdAndDelete(req.params.id, function(error, docs) {
        if (error) {
            res.status(500).json({"Failure": "Failed to delete employee."});
        }
        else {
            res.status(200).json({"Success": "Sucessfully deleted the employee."});
        }
    });
}

module.exports = {
    createEmployee,
    getAllEmployees,
    getSingleEmployee,
    updateEmployee,
    deleteEmployee
}

