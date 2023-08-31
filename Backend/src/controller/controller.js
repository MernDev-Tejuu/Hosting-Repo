const { model } = require("mongoose");
const user = require("../model/schema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const middleware = require("../middleware/midW");

const requestSender = (req,res)=>{
   return res.send(req.finder)
}

//Used Async Await ⤵️
const createUser1 = async (req, res) => {

  try {
    // Accessing the Request Body ⤵️
    let body = req.body;
    const { email, password } = body;
    //Accessed the Request Body ⤴️
    //Checking that user filled all the required Fields 🔻
    let reqField = [
      "phone",
      "email",
      "age",
      "firstName",
      "lastName",
      "gender",
      "password",
    ];
    for (i = 0; i < reqField.length; i++) {
      if (!body.hasOwnProperty(reqField[i]))
      return res.status(422).send({ msg: `${reqField[i]} is required` });
       
    }
    //Checking Done

    //Checking request data whether that is present or not in the database 🔻
    let finder = await user.findOne({ email });
    
    if (finder)
      return res.status(409).send({ msg: "User has already been registered" });
    //Checking Done
    // Applying Regex to check email is valid or not 🔻
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email) === false)
    return res
    .status(409)
    .send({
      messgae: `${email} is not a valid email address, Please enter a valid email address in the format example@domain.com`,
    }); 
    // ---------------------------------------------------------------------
    
    //Password hashing...present in schema.js (Middleware) ➡️
    //Passing all validation,creating data in the database
    console.log('working creation')
    const creation = await user.create(body);
       
    return res
      .status(201)
      .send({
        message: "Congratulations!!,You had reserved your slot",
        yourData: creation,
      });
 
      
      //----------------------------------------------------------------------------
      
    } catch (err) {
      return res.send(err.message);
    }
    
  };
  
//  Used Promises ⤵️
// const createUser2 = (req,res)=>{
//     let body = req.body
//     const {email,phone} = body
//      user.findOne({phone})
//      .then((userExist)=>{
//        if(userExist) return res.status(200).send({message : "This Phone is already registered"})
//      }).catch((err)=>{
//        return res.send(err)
//      })
//     user.findOne({email})
//     .then((userExist)=>{
//         if(userExist)return res.status(200).send({msg : "The User has already been registered"})

//         user.create(body)
//         .then(()=>{
//             return res.status(201).send({created : "User has reserved successfully"})
//         }).catch((err)=>{
//             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             const {email,phone,FirstName,lastName}=body
//             if(!email) return res.status(422).send({message : "Please Input valid Field for email"})
//             if(emailRegex.test(email)===false)return res.status(422).send({message: "Email is not accurate"})
//             if(!phone) return res.status(422).send({message : "Please Input valid Field for Phone"})
//             if(!FirstName) return res.status(422).send({message : "Please Input valid Field for First name"})
//             if(!lastName) return res.status(422).send({message : "Please Input valid Field for Last name"})

//         })
//     })

// }

//------------------------------------------------------------------------------------

const getUser = async (req, res) => {
  // If all validations pass, return the success message with the user data
  res.cookie("presenty", req.tokenCreate, {
    expires: new Date(Date.now() + 23458000000),
    httpOnly: true,
  });
  //2ce5d41fc32c68168938018de76cdf9b8866af47e57832ee9556406a7cedf30b
  //%222ce5d41fc32c68168938018de76cdf9b8866af47e57832ee9556406a7cedf30b%22
  //mon_oeu16662465004220.7185955547790672
  const finder = req.finder;
  res.send({ message: finder });
  console.log('get method') 
};
//Making Variables Public
module.exports.getUser = getUser;
module.exports.createUser1 = createUser1;
module.exports.requestSender=requestSender
