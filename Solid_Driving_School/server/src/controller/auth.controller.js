const bcrypt = require("bcryptjs");
const User = require('../model/user.model');
const Role = require('../model/role.model')
const { generateToken } = require('../utils/token.generator');
const UserStatus = require('../model/userstatus.model');



const login = async (req, res) => {
    try{
        const { username, password } = req.body;

        const user = await User.findOne({ username });
    
        if(!user) return res.status(401).json({ message: "Email doesn't exist" });

        if(!(await bcrypt.compare(password, user.password))) return res.status(401).json({ message: "Incorrect Password" });
        
        const role = await Role.findById(user.role);

        const token = generateToken(user._id,role.name,res);

        if (!token) res.status(200).json({message:"Error while generating te token.Try to login"});

        res.setHeader("jwt_token", `${process.env.JWT_TOKEN_PREFIX} ${token}`);

        res.status(200).json({
            _id:user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            role:role,
            userstatus:user.userstatus,
            photo: user.photo
        });

    }catch(error){
        console.log("Error in Login Controller ",error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const signup = async(req,res) => {
    try{
        const { firstname,lastname,username,password} = req.body;

        const user = await User.findOne({username});

        if(user) return res.status(400).json({ error: "Username already exists" });

        // const salt = await bcrypt.genSalt();
        // const hashedPassword = await bcrypt.hash(password,salt);

        const userstatus = await UserStatus.findOne({name:"Active"});
        const userrole = await Role.findOne({name:"USER"});


        const newUser = await new User({firstname, lastname, username, password, userstatus:userstatus._id, role:userrole._id}).save();
        

        if(!newUser) res.status(400).json({ error: "Invalid user data" });

        const role = await Role.findById(newUser.role);
  
        const token = generateToken(newUser._id,role.name,res);

        res.setHeader("jwt_token", `${process.env.JWT_TOKEN_PREFIX} ${token}`);

        res.status(201).json({
            _id:newUser._id,
            firstname: newUser.firstname,
            lastname: newUser.lastname,
            username: newUser.username,
            role:role,
            userstatus:newUser.userstatus,
            photo: newUser.photo
            
        });
     
    }catch(error){
        console.log("Error in Signup Controller: ",error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}

const logout = async (req, res) => {
    try{
        res.cookie("jwt_token", "", {maxAge:0});
        res.status(200).json({ message: "Logged out successfully" });


    }catch(err){
        console.log("Server error in logout", err.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}   

module.exports = {login,signup,logout};