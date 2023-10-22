const UserRouter = require("express").Router();
const UserModel = require("../Models/Users.model");
// const { generateHashedPassword } = require("../utils/Auth.utils");
var mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

UserRouter.get('/',(req,res,next)=>
{
  UserModel.find().then((cursor)=>
  {
    if(cursor.length>0)
    {
      return res.status(200).json({
        data:cursor,
        meassage:"success"
       })
       
    }
   else{
    return res.status(200).json({
      data:[],
      meassage:"success"
     })
   }

  }).catch((err)=>
  {
    return res.status(401).jason({
      message:"error"
    })
  });
})

UserRouter.post("/create",(req,res,next)=>
{
  const data=req.body;
  console.log(data);
  const User=new UserModel(data);
  User.save().then((result)=>
  {
    if(result&& result.id)
    {
      return res.status(200).json({
        message:"created ",
        data:result

      });
    }
  }).catch((error)=>
  {
    return res.status(401).json({
      message:"failure",

    })

  })



})


module.exports = UserRouter;

/*  

*/