const express = require('express');
const router = express.Router();
const employeeRouter = require('../../controllers/employee');

router.post('/createEmployee', employeeRouter.createEmployee);
router.get('/getAllEmployees', employeeRouter.getAllEmployees);
router.get('/getSingleEmployee', employeeRouter.getSingleEmployee);
router.put('/updateEmployee', employeeRouter.updateEmployee);
router.delete('/deleteEmployee', employeeRouter.deleteEmployee);

module.exports = router;

