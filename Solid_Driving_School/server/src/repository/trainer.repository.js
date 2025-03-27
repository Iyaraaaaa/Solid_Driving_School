const Trainer = require('../model/trainer.model');

 
     const createTrainer = async (trainer) => {
        
        try{

            const newTrainer = new Trainer(trainer);
            return await newTrainer.save();

        }catch(error){
            throw new Error(`Error  while creating trainer: ${error.message}`);
        }
    }


     const findAllTrainers = async(searchQuery) => {
        try{

            return await Trainer.find(searchQuery).populate('gender').exec();

        }catch(error){
            
            throw new Error(`Error while fetching trainer in Repo: ${error.message}`);
        }
    }

    const updateTrainer = async (trainer) => {
        try{
            const {_id,name,email,nic,mobile,yoexperience,photo,gender} = trainer 
            return await Trainer.updateOne({_id}, {$set:{name,email,nic,mobile,yoexperience,photo,gender}});

        }catch(error){
            throw new Error(`Error while updating trainer: ${error.message}`);
        }
    }

    const deleteTrainer = async (trainerEmail) => {
        try{
            
         
            return await Trainer.findOneAndDelete({email:trainerEmail});

        }catch(error){
            throw new Error(`Error while updating trainer: ${error.message}`);
        }
    }


    module.exports = {createTrainer,findAllTrainers,updateTrainer,deleteTrainer};