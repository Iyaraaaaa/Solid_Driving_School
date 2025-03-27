const Training = require('../model/training.model');
const trainingRepo = require('../repository/training.repository');
const {createTraining,findAllTrainings,deleteTraining,updateTraining,findTriningById} = trainingRepo;

 
const create = async (training, image) => {
    console.log(training);
    

    // if(training.trainer.length > 0){
    //     console.log(training.trainer);
    //     const trainerObjectIDArray = training.trainer.map(tr => new ObjectId(tr));
    //     training.trainer = trainerObjectIDArray;
    // }

    try{

        const resData = await createTraining({...training,photo:image?image.buffer:''});
        return {
            data:"Training Successfully Registerd",
            statuscode:201
           }
    }catch(err){
        return {
            data:"Training Registraion Error: "+err.message,
            statuscode:500
           }
    }
}

const findById = async (id) => {

    try{
        const temp = await findTriningById(id);
        const resData = {
            _id : temp._id,
            name : temp.name,
            price : temp.price,
            duration : temp.duration,
            photo : temp.photo.toString('base64'),
            trainer : temp.trainer,
            description: temp.description
        };
        return {
            data:resData,
            statuscode:201
        };

    }catch(err){
        return {
            data:"Error while fetching trainings: "+err.message,
            statuscode:500
        }
    }
}

const findAll = async (queryparamobject) => {

    const {name} = queryparamobject;

    const query = {};

    if(name && name.trim() !== '') query.name = { $regex: name, $options: 'i' };

    try{
        const temp = await findAllTrainings(query);

        const resData = temp.map(training => {
            return{
                _id : training._id,
                name : training.name,
                price : training.price,
                duration : training.duration,
                photo : training.photo.toString('base64'),
                trainer : training.trainer,
                description: training.description
            }
        })
        return {
            data:resData,
            statuscode:201
        }

    }catch(err){
        return {
            data:"Error while fetching trainings: "+err.message,
            statuscode:500
           }
    }

}


const update = async (training, image) => {   

    try{
        const resData = await updateTraining(training);
        return {
            data:resData,
            statuscode:201
        }

    }catch(err){
        return {
            data:"Error while updating trainings: "+err.message,
            statuscode:500
           }
    }

}

const remove = async (trainingId) => {

    try{
        if(!await Training.findOne({_id:trainingId})) return {
            data:"Training Not Found, Input a valid Training",
            statuscode:404
        }
        const resData = await deleteTraining(trainingId);
        return {
            data:resData,
            statuscode:204
        }

    }catch(err){
        return {
            data:"Error while deleting trainings: "+err.message,
            statuscode:500
           }
    }

}

module.exports = {
    create,
    findAll,
    findById,
    update,
    remove
}