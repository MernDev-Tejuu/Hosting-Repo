require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose")  
const path = require('path')
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser')
app.use(cookieParser()); // import the CORS middleware
const session = require('express-session');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());  
//

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'Super Secret (change it)',
    resave: true,
    saveUninitialized: false,
    cookie: {
      sameSite: process.env.NODE_ENV === "production" ? 'none' : 'lax', // must be 'none' to enable cross-site delivery
      secure: process.env.NODE_ENV === "production", // must be true if sameSite='none'
    }
  })
  );
  app.set("trust proxy", 1);
  app.use(cors(
    {
      origin : ['https://tejascareer.netlify.app', 'https://tejascareer.onrender.com'],
      methods : ["POST","GET"],
      credentials :true
    }
    ))
    
    
    
    
    //I changed here for Git check
    const controller = require("../controller/controller");
    const Middleware = require("../middleware/midW");
    //route handler⤵️ 
    
    app.use(controller)
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
