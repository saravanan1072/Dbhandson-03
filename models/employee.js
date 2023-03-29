const mongoose=require("mongoose");


//schema definition..i.e,,defining structure to the data of the document..
const employeeSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    salary:String,
    department:String,
    lastCompany:String,
    lastSalary:String,
    overallExp:String,
    contactInfo:String,
    yearGrad:String,
    gradStream:String,
    created:Date
});

// "collection name" and schema name .. in model
const Employee = mongoose.model("employee",employeeSchema);

module.exports={
    Employee
};