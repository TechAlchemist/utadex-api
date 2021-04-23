const express = require('express');
const router = express.Router();
const employeeRouter = require('../../controllers/employee');

router.post('/createEmployee', employeeRouter.createEmployee);
router.get('/getAllEmployees', employeeRouter.getAllEmployees);
router.get('/getSingleEmployee/:id', employeeRouter.getSingleEmployee);
router.put('/updateEmployee/:id', employeeRouter.updateEmployee);
router.delete('/deleteEmployee/:id', employeeRouter.deleteEmployee);

module.exports = router;

