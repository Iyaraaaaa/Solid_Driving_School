const userService = require('../service/user.service');
const {create,findAll,findByUsername,update, remove} = userService;

 
const saveUser = async (req, res) => {
  
      const userData = req.body; 
      const image = req.file; 
      const responseData = await create(userData, image);
      res.status(responseData.statuscode).json(responseData.data);  
}


const findAllUsers = async (req, res) => {
     
     const responseData = await findAll(req.query);
     res.status(responseData.statuscode).json(responseData.data);
}

const findUserByUsername = async (req, res) => {

     const {username} = req.param;
     const responseData = await findByUsername(username);
     res.status(responseData.statuscode).json(responseData.data);
 }

 const updateUser = async (req, res) => {

     const updatedUser = req.body;
     const image = req.file; 
     const responseData = await update(updatedUser, image);
     res.status(responseData.statuscode).json(responseData.data);

 }

 const deleteUser = async (req, res) => {

     const {username} = req.params;

     const responseData = await remove(username);
     res.status(responseData.statuscode).json(responseData.data);

 }



module.exports = {saveUser,findAllUsers,findUserByUsername,updateUser,deleteUser};