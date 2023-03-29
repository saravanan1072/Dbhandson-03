const {Employee} =require("../models/employee")

const employeeEnrollment = async(req,res)=>{
    const employeeData=req.body;

    try{
        const employeeDocument = new Employee({
            firstName:employeeData.firstName,
            lastName:employeeData.lastName,
            salary:employeeData.salary,
            department:employeeData.department,
            lastCompany:employeeData.lastCompany,
            lastSalary:employeeData.lastSalary,
            overallExp:employeeData.overallExp,
            contactInfo:employeeData.contactInfo,
            yearGrad:employeeData.yearGrad,
            gradStream:employeeData.gradStream,
            created:Date.now()
        });
        // const validateResult=employeeEnrollment.validatesync();
        // console.log(validateResult);
        //save data in collection..
        const dbresponse = await employeeDocument.save();
        console.log("Data is Saved =>",dbresponse);
        return res.status(200).send({message:"Employee info is Saved"})
    }
    catch(error){
        console.log("Something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}

// Query the collection ""employee"" and list all the documents
const getEmployeeData=async (req,res)=>{
        const queryParams=req.body;
        console.log(queryParams);
        const query={"firstName":queryParams.firstName}
        try{
           const result = await Employee.find(query);
           console.log("Employee Data fetched =>",result);
           return res.status(200).send({message:"Employee info is Fetched.."})
        }
        catch(error){
            console.log("Something went wrong while performing db operation");
            return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
        }
    }

// Query the collection ""employee"" and list the employees who are having salary more than 30000
const getEmployeeSalaryData=async (req,res)=>{
    const queryParams={"salary":{$gt:'30000'}};
    console.log(queryParams);
    try{
        const result=await Employee.find(queryParams);
        console.log("the result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("Something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}

// Query the collection ""employee"" and list the employees who are having experience more than 2 years.
const getExpEmployeeData=async (req,res)=>{
    const queryParams={"overallExp":{'$gt':"2"}};
    console.log(queryParams);
    try{
        const result=await Employee.find(queryParams);
        console.log("the result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("Something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`});
    }
}

// Query the collection ""employee"" and list the employees who are graduated after 2015 and having experience more than 1 year 
const getGradEmployeeData=async (req,res)=>{
    const queryParams={"yearGrad":{'$gt':"2015"}}&&{"overallExp":{'$gt':"2"}};
    console.log(queryParams);
    try{
        const result=await Employee.findGradInDb(queryParams);
        console.log("the result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("Something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}


// Query the collection ""employee"" and update the salary of the employee whose salary is greater than 70000 to 65000.
 const updateEmployeeData=async(req,res)=>{
            const updateData=req.body;
            console.log(updateData);
            const filter=updateData.filter;
            console.log(filter);
            const value={$set:updateData.value}
            console.log(value);
            try{
                const result=await Employee.updateMany(filter,value);
                console.log("the result of database operation =>",result);
                return res.status(200).send(result);
            }
            catch(error){
                console.log("Something went wrong while performing db operation");
                return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
            }
        }

// Delete all the documents from ""employee"" where last company is Y"
 const deleteEmployeeData=async(req,res)=>{
                const condition=req.query;
                console.log(condition);
                try{
                    const result=await Employee.deleteMany(condition);
                    console.log("the result of database operation =>",result);
                    return res.status(200).send(result);
                }
                catch(error){
                    console.log("Something went wrong while performing db operation");
                    return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
                }
            }

module.exports={
    employeeEnrollment,getEmployeeData,getEmployeeSalaryData,getExpEmployeeData,getGradEmployeeData,updateEmployeeData,deleteEmployeeData
}

// Create a database , give it name like ""Human_Resource"". Create a collection inside this named ""employee""
