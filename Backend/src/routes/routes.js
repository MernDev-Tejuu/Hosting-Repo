require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose")  
const path = require('path')
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser')
app.use(cookieParser()); // import the CORS middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());  
//
         
//I changed here for Git check
const controller = require("../controller/controller");
const Middleware = require("../middleware/midW");
//route handler⤵️ 

//----------------------------------------------------
app.post("/login", Middleware.authJWT, controller.getUser); 
app.post("/register", controller.createUser1);
app.get("/about", Middleware.authenticate, controller.requestSender);
// app.get("/fetchName",controller.getUserbyQuery)
// app.get("/companyAccess", controller.getCompany  )
// --------------------------------------------------
//  


mongoose.set('strictQuery', true)
mongoose.connect(process.env.DB).then(()=>{
  console.log("Mongo Connected");
}).catch((err)=>{
  console.log("Not connected, try later");
})   



//
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}..`);
});
module.exports = app;
