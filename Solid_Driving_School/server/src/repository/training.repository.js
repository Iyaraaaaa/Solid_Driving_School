const Training = require('../model/training.model');

 
     const createTraining = async (training) => {
        
        try{

            const newTraining = new Training(training);
            return await newTraining.save();

        }catch(error){
            throw new Error(`Error  while creating training: ${error.message}`);
        }
    }


    const findTriningById = async(id)=>{
        try{

            return await Training.findById(id);

        }catch(error){
            
            throw new Error(`Error while find a training: ${error.message}`);
        }
    }


     const findAllTrainings = async(searchQuery) => {
        try{

            return await Training.find(searchQuery).populate('trainer', 'name email profileimage').exec();

        }catch(error){
            
            throw new Error(`Error while fetching trainings: ${error.message}`);
        }
    }

    const updateTraining = async (training) => {
        try{
            const {name,price,duration,image,trainer,description} = training 
            return await Training.updateOne({_id:training._id}, {$set:{name,price,duration,image,trainer,description}});

        }catch(error){
            throw new Error(`Error while updating training: ${error.message}`);
        }
    }

    const deleteTraining = async (trainingId) => {
        try{
         
            return await Training.findByIdAndDelete(trainingId);

        }catch(error){
            throw new Error(`Error while deleting training: ${error.message}`);
        }
    }


    module.exports = {createTraining,findAllTrainings,updateTraining,deleteTraining,findTriningById};