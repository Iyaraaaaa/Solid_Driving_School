const roleService = require('../service/role.service');
const {findAll} = roleService;

const findAllRoles = async (req, res, next) =>{
   
    const responseData = await findAll(req.query);
    res.status(responseData.statuscode).json(responseData.data);  
    
}


module.exports = {findAllRoles}