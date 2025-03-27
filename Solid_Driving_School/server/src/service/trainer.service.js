const Trainer = require('../model/trainer.model');
const trainerRepo = require('../repository/trainer.repository');
const {createTrainer,findAllTrainers,deleteTrainer,updateTrainer} = trainerRepo;

 
const create = async (trainer, image) => {

    try{
        const resData = await createTrainer({...trainer, photo:image?image.buffer:''});
        return {
            data:"Trainer Successfully Registerd",
            statuscode:201
           }
    }catch(err){
        return {
            data:"Trainer Registraion Error" + err,
            statuscode:500
           }
    }
}

const findAll = async (queryparamobject) => {

    const {name, email, nic} = queryparamobject;

    const query = {};

    if(name && name.trim() !== '') query.name = { $regex: name, $options: 'i' };
    if(email && email.trim() !== '') query.email = { $regex: email, $options: 'i' };
    if(nic && nic.trim() !== '') query.nic = { $regex: nic, $options: 'i' };

    try{
        const temp = await findAllTrainers(query)
        
        const resData = temp.map(datum => {
            return{
                _id:datum._id,
                 name:datum.name,
                 email:datum.email,
                 nic:datum.nic,
                 mobile:datum.mobile,
                 yoexperience:datum.yoexperience,
                 photo:datum.photo.toString('base64'),
                 gender:datum.gender
             };
        });
        return {
            data:resData,
            statuscode:201
        }

    }catch(err){
        return {
            data:"Error while fetching trainers: "+err.message,
            statuscode:500
           }
    }

}

const update = async (trainer, image) => {

    if(typeof trainer.photo == 'string'){
        console.log(typeof trainer.photo);
        

        const base64Data = trainer.photo.replace(/^data:image\/\w+;base64,/, '');
        image = Buffer.from(base64Data, 'base64').toString('binary');
    }

    try{
        const resData = await updateTrainer({...trainer, photo:image?image.buffer:''});
        return {
            data:resData,
            statuscode:201
        }

    }catch(err){
        return {
            data:"Error while updating trainers: "+err.message,
            statuscode:500
           }
    }

}

const remove = async (trainerEmail) => {

    try{
        if(!await Trainer.findOne({email:trainerEmail})) return {
            data:"Triner Not Found, Input a valid trainer",
            statuscode:404
        }
        const resData = await deleteTrainer(trainerEmail);
        return {
            data:resData,
            statuscode:204
        }

    }catch(err){
        return {
            data:"Error while deleting trainers: "+err.message,
            statuscode:500
           }
    }

}

module.exports = {
    create,
    findAll,
    update,
    remove
}