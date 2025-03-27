const trainerService = require('../service/trainer.service');
const {create,findAll,update,remove} = trainerService;

 
const saveTrainer = async (req, res, next) => {
  
      const trainerData = req.body;        
      const image = req.file;
      const responseData = await create(trainerData, image);
      res.status(responseData.statuscode).json(responseData.data);  
}


const findAllTrainers = async (req, res, next) => {
     
     const responseData = await findAll(req.query);
     res.status(responseData.statuscode).json(responseData.data);
}

  const updateTrainer = async (req, res) => {
      const updatedTrainer = req.body;
      const image = req.file; 
      const responseData = await update(updatedTrainer, image);
      res.status(responseData.statuscode).json(responseData.data);
 
  }
 
  const deleteTrainer = async (req, res) => {
 
      const {email} = req.params;      
      const responseData = await remove(email);
      res.status(responseData.statuscode).json(responseData.data);
 
  }
 



module.exports = {saveTrainer,findAllTrainers,updateTrainer,deleteTrainer};