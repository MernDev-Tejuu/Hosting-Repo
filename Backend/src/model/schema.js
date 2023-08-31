const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const userSchema = new mongoose.Schema({
    firstName : {
        type:String,
        required : true
      
    },
    lastName :{ 
        type: String,
        required : true
    }, 
    age : Number,
    gender : {
        type:String,
        required : true,
        enum : ["Male","Female","LGBTQ"]
    },
    phone :{
        type:String,
        required : true,
        unique : true
    },
    email :{
        type:String,
        required : true
      
    },
    password:{
        type:String,
        required : true
      
    },
    token :[ {
        type:String,
        required : true
    }],
    
    // Confirm_Password : password,
},{timestamps:true})
 
//Middleware 

userSchema.pre("save",async function(next){
    
    console.log("Middleware is running...");
    if(this.isModified("password"))
    {this.password = await bcrypt.hash(this.password,12)}
    next()
})
 

const user = mongoose.model("USER",userSchema)

module.exports = user

