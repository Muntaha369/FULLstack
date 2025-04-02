const User = require('../models/user-modle');
const bcrypt = require('bcrypt');

const home = async(req,res)=>{
  try {
    res.status(200).send("Wassup Wassup FAM BRUH!!");
  } catch (error) {
    console.log(error);
  }
}

const register = async(req,res)=>{
  try {

    const {username, email, phone_no, password}=req.body;

    const UserExist = await User.findOne({email: email})

    if(UserExist){
      return res.status(400).json({msg: "message already exist"})
    }
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password, saltRound)

    const UserCreated = await User.create({username, email, phone_no, password: hashedPassword});

    res.status(200).json({
      msg: UserCreated,
      token: await UserCreated.generateToken(),
      UserId: UserCreated._id.toString(),
    })
  } catch (error) {
    res.status(404).send({msg: "Something is wrong"})
  }
}

module.exports = {home,register}