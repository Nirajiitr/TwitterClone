import { User} from "../Models/authModel.js";
import bcrypt from "bcrypt"
const register =async (req, res)=>{
  const {fullname, password, username, DOB} = req.body;
  if(!fullname || !password || !username || !DOB){
    return res.status(401).json({message:"all field are required"})
  }

  const salt = 10;
  const hashPassword = bcrypt.hashSync(password, salt);
  const user = await User.findOne({username:username});
  if(user){
    return res.status(401).json({
      message: "user already exist"
    })
  }
  try {
  const newUser=  User({
      fullname,
      password :hashPassword,
      username,
      DOB
  })
    await newUser.save();
    res.status(201).json({
      message: "account created successfully",
      newUser
    })
    
  } catch (error) {
    res.status(500).json(error)
  }

}

const login=async(req, res)=>{
   const {username, password} = req.body;
   if(!username|| !password){
    return res.status(401).json({
      message:"all field are required"
    })
   }
   try{
   const user = await User.findOne({username:username})
  if(!user){
    return res.status(401).json({
      message:"user does not exist"
    })
  }
  const isPassword = bcrypt.compare(password, user.password)
  if(!isPassword){
    return res.status(401).json({
      message: "wrong password!"
    })

  }
  res.status(200).json(user)
}catch(error){
  res.status(500).json(error)
}
  
}

export {register,login}