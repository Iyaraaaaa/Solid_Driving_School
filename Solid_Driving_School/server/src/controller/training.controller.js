const trainingService = require('../service/training.service');
const {create,findAll,update,remove, findById} = trainingService;

 
const saveTraining = async (req, res, next) => {
  
      const trainingData = req.body;  
      const imagefile = req.file;
      const responseData = await create(trainingData, imagefile);
      res.status(responseData.statuscode).json(responseData.data);  
}


const findAllTrainings = async (req, res, next) => {
     
     const responseData = await findAll(req.query);
     res.status(responseData.statuscode).json(responseData.data);
}

  const findTriningById = async (req, res) => {
    const {trainingId} = req.params;
    const responseData = await findById(trainingId);
    res.status(responseData.statuscode).json(responseData.data);

  }

  const updateTraining = async (req, res) => {
      const updatedTraining = req.body;
      const image = req.file; 
      const responseData = await update(updatedTraining, image);
      res.status(responseData.statuscode).json(responseData.data);
 
  }
 
  const deleteTraining = async (req, res) => {
 
      const {trainingId} = req.params;
      const responseData = await remove(trainingId);
      res.status(responseData.statuscode).json(responseData.data);
 
  }
 



module.exports = {saveTraining,findAllTrainings,findTriningById,updateTraining,deleteTraining};