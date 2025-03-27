const contactusService = require('../service/contactus.service');
const {create,findAll,remove} = contactusService;

 
const saveContactUs = async (req, res, next) => {
  
      const contactusData = req.body;  
      const responseData = await create(contactusData);
      res.status(responseData.statuscode).json(responseData.data);  
}


const findAllContactUs = async (req, res, next) => {
     
     const responseData = await findAll(req.query);
     res.status(responseData.statuscode).json(responseData.data);
}

 
  const deleteContactUs = async (req, res) => {
 
      const {contactUsId} = req.params;
      console.log(contactUsId);
      
      const responseData = await remove(contactUsId);
      res.status(responseData.statuscode).json(responseData.data);
 
  }
 



module.exports = {saveContactUs,findAllContactUs,deleteContactUs};