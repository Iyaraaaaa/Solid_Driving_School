const genderService = require('../service/gender.service');
const {findAll} = genderService;

const findAllGenders = async (req, res, next) =>{
   
    const responseData = await findAll();
    res.status(responseData.statuscode).json(responseData.data);  
    
}


module.exports = {findAllGenders}