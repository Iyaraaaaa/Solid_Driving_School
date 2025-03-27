const userStatusService = require('../service/userstatus.service');
const {findAll} = userStatusService;

const findAllUserStatuses = async (req, res, next) =>{
   
    const responseData = await findAll();
    res.status(responseData.statuscode).json(responseData.data);  
    
}


module.exports = {findAllUserStatuses}