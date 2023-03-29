const express=require("express");
const employeeController = require("../controllers/employee")

const router=express.Router();

router.post('/employee',employeeController.employeeEnrollment);
router.get("/employee",employeeController.getEmployeeData);
router.get("/employeesalary",employeeController.getEmployeeSalaryData);
router.get("/employeeexp",employeeController.getExpEmployeeData);
router.get("/employeegrad",employeeController.getGradEmployeeData);
router.put("/employee",employeeController.updateEmployeeData);
router.delete("/employee",employeeController.deleteEmployeeData);

module.exports=router;