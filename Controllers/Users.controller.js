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
    return res.status(401).json({
      message:"error"
    })
  });
})

UserRouter.post("/create", (req, res, next) => {
  const data = req.body;
  console.log(data);

  const User = new UserModel(data);
  User.save()
    .then((result) => {
      if (result && result._id) { // Check for _id instead of id
        return res.status(200).json({
          message: "User created",
          data: result
        });
      } else {
        return res.status(400).json({
          message: "User not created",
        });
      }
    })
    .catch((error) => {
      console.error(error); // Log the error for debugging
      return res.status(500).json({
        message: "Internal server error",
      });
    });
});


module.exports = UserRouter;


/*  

*/