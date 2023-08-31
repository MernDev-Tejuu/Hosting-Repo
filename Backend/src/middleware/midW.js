const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const user = require("../model/schema")

   ///JWT Authentication
  
  const authJWT = async (req,res,next)=>{
   try{ 
        const {email,password}=req.body
        // Check if email and password are present or not
        if(!email && !password)return res.status(422).send({message : "Email and Password is required"})
        
        // Check if email and password fields are present in the request body  
        const requiredField = ["email","password"]
        for(i=0;i<requiredField.length;i++){
            if(!req.body.hasOwnProperty(requiredField[i]))
            return res.status(422).send({message: `${requiredField[i]} is not mentioned`})
          }
          // Check if the email is in a valid format using a regular expression
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if(emailRegex.test(email)===false)
          return res
          .status(422) 
          .send({message: "Invalid email,please put valid email format exmaple@gmail.com"})
          

          // Check if a user exists with the provided email and password
          
          
          const finder = await user.findOne({email:email})
          
          
          if(!finder)return res.status(404).send({message:"User Not found"})
          const passwordVerify = await bcrypt.compare(password,finder.password )    
          if(!passwordVerify)
          return res
          .status(404)
          .send({message: "password is incorrect"})
          
          //jwt creation using token and verification
          const tokenCreate  = jwt.sign({_id : finder._id},process.env.SK)
          
         
          const tokenVerification = jwt.verify(tokenCreate,process.env.SK)  
          if(!tokenVerification)return res.status(401).send("Authentication failed")
          // const{firstName}=tokenCreate
          
          // Cookie creation..
          
          const {token} = finder
          token.push(tokenCreate)
          
          req.finder = finder
          req.tokenCreate = tokenCreate
        }
        catch(err){
          return res.status(500).send(err.message)
        }
        // return res.send({data : finder})
        
        
        next()
        
        
        
        
  }

  //Frontend About wala part =>{
    const authenticate = async(req,res,next)=>{
      try{
          
         const tokenFetch = req.cookies.presenty
         if(!tokenFetch)window.alert('Something Went Wrong,Try to register again')
         const tokenVerification = jwt.verify(tokenFetch,process.env.SK)
         const tokenId = tokenVerification._id
         
         if(!tokenVerification)return window.alert('Token not Valid')
         const finder = await user.findOne({_id : tokenId})

         if(!finder){throw new error('user not present')}
     
         req.finder=finder   
         next()
      }
      catch(err){
        console.log(err.message)
      }
    }
// } 
  module.exports.authJWT=authJWT
  module.exports.authenticate=authenticate