const jwt = require("jsonwebtoken");
const User = require( "../model/user.model");

const authenticate = async (req, res, next) => {

    try{
        const authHeader = req.headers.authorization;

        if(!authHeader || !authHeader.startsWith("Bearer ")) return res.status(401).json({error:"Unauthorized - No Token Provided"});
        
        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if(!decoded) return res.status(401).json({error: "Unauthorized - Invalid Token" });

        const user = await User.findById(decoded.userId).populate({path:'role',populate:{path:'permission'}}).select("-password");

        if(!user) return res.status(404).json({error: "User Not Found"});

        const role = decoded.role;
        
        if(!role && user.role.name !== role) return res.status(403).json({error: "Unauthorized Access, Role Not Found" });

    
        req.user = user;
        next();

    }catch(error){
        console.log("Error occured in ProtectedRoute:",error);
        res.status(500).json({error: "Internal Server Error"});        
    }
};

module.exports =  authenticate;
