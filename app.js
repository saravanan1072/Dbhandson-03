
const express=require("express");
const bodyParser=require("body-parser")
const employeeRouter=require("./routes/employee")
const connect=require("./database/mongoose")


const app=express();
app.use(bodyParser.json());
app.use(employeeRouter);

app.listen(5000,async ()=>{
    console.log("Server running at port 5000");
    await connect();
});