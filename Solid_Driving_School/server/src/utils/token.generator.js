const jwt = require("jsonwebtoken");

const generateToken = (userId,role,res) => {
    return jwt.sign({userId, role:role}, process.env.JWT_SECRET_KEY,{
        expiresIn: "15d",
    });
};

module.exports = { generateToken };