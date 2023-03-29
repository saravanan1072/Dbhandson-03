//establish connection to db using mongoose...
const mongoose=require("mongoose");
const url="mongodb+srv://saravanan10722:saravanan10722@cluster0.gdiprv9.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery",true);

//making connection..
const connect=async()=>{
try{
    console.log("Connection to mongodb...!!!!");
    const dbConnection = await mongoose.connect(url);
    console.log("Connected =>");
}
catch(error){
    console.log("Error in connecting to db..",error);
}
}

module.exports=connect;
