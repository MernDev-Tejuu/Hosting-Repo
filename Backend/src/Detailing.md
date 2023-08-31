So here we are creating backend part for our project
*Question comes in mind ;
# How to start?
# How to build?
# what libraries we are requiring?
# What kind of modules we should create?

So very first thing is :
# npm init
By entering this cmd (npm init) We are creating package.json for our project

# what is package.json?
Ans : Package.json is a file were you can see who,s is the programmer of the code,version of our node.js also its modules ,the very main thing is to understand what kind of libraries and packages are we using for our project,which is known as dependencies.

------------------------------------------------------------------------------------

Moverover,
we will install node_modules by entering the cmd
# npm i 

This cmd will install all the modules which are present 

# what is node_modules?
Ans: Node modules basically contains the pre-written code for javascript for eg: connect to the database ,handling http request response and all,if we need a module which is outside of node_modules then will install it by npm install (module_name)

-----------------------------------------------------------------------------------

Our Project is developed with 4technologies

# MERN  : MONGODB EXPRESS REACT NODEJS

# MongoDB => Its  database to store form data in a object form in key-value pair.The document didnt get store in the form of table or row,its in the form of json for eg:
{
  "_id": ObjectId("6159d67db4de4f0a406c8e58"),
  "name": "John Doe",
  "age": 30,
  "email": "john.doe@example.com",
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zip": "12345"
  },
  "interests": ["hiking", "reading", "music"],
  "createdAt": ISODate("2021-10-03T12:34:56.789Z"),
  "updatedAt": ISODate("2021-10-03T12:34:56.789Z")
}
# Here mongoDB provides an objectId for each documents which will get stored, also have several methods like timestamps,validation,schemas

# Express : Express is web application framework for nodejs,It provides devoper to define routes,use middleware to handle request response ,Express provides variety of methods like Rest API,(GET,POST,PUT,PATCH).Using express a developer can perform CRUD Operation (Create,Read,Update,Delete).We can even create servers side for our client .

To Install express will use 
# npm install express

After installing,will require to use express in our project
# Const express = require('express)

Here's an example for Express
Const express = require('express)
const app = express()

app.post('/',(req,res)=>{
  return res.send('Express Example')
})

//We need server to run this on client side

app.listen(5000)
//Server running 

# React : 