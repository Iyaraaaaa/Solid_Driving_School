const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
const User = require('../model/user.model');
const userRepo = require('../repository/user.repository');
const { createUser, findAllUsers, findUserByUsername, updateUser, deleteUser } = userRepo;

const create = async (user, image) => {

    if(user.training && user.training.length > 0){
        const trainingObjectIDArray = user.training.map(tr => new ObjectId(tr));
        user.training = trainingObjectIDArray;
    }

    try {
        
        const resData = await createUser({...user, photo:image?image.buffer:''});
        return {
            data: "User Successfully Registerd",
            statuscode: 201
        }
    } catch (err) {
        return {
            data: "User Registraion Error: "+err.message,
            statuscode: 500
        }
    }
}

const findAll = async (queryparamobject) => {

    const {firstname, lastname, username, role} = queryparamobject;

    const query = {};

    if(firstname && firstname.trim() !== '') query.firstname = { $regex: firstname, $options: 'i' };
    if(lastname && lastname.trim() !== '') query.lastname = { $regex: lastname, $options: 'i' };
    if(username && username.trim() !== '') query.username = { $regex: username, $options: 'i' };
    if(role && role.trim() !== '') {
        if(ObjectId.isValid(role)) {
            query.role = new ObjectId(role);
        }else{
            return {
                data: "Invalid ObjectId",
                statuscode: 404
            }
        }
       
    }

    try {
        const temp = await findAllUsers(query);

        const resData = temp.map(user => {
            return{
                _id:user._id,
                firstname : user.firstname,
                lastname:user.lastname,
                username:user.username,
                photo:user.photo?.toString('base64'),
                userstatus:user.userstatus,
                training:user.training,
                booking:user.booking,
                role:user.role,
                canDelete:user.canDelete
            };
        });

        return {
            data: resData,
            statuscode: 200
        }

    } catch (err) {
        return {
            data: "Error while fetching Users: "+err.message,
            statuscode: 500
        }
    }

}


const update = async (user, image) => {
  

    if(typeof user.photo == 'string'){
        console.log(typeof user.photo);
        

        const base64Data = user.photo.replace(/^data:image\/\w+;base64,/, '');
        image = Buffer.from(base64Data, 'base64').toString('binary');
    }
    
    try {
        const resData = await updateUser({...user, photo:image?image.buffer:''});
        return {
            data: resData,
            statuscode: 201
        }
    } catch (err) {
        return {
            data: "Error while updating Users: "+err.message,
            statuscode: 500
        }
    }
}


const remove = async (username) => {

    console.log(username);
    

    try {
        const user = await User.findOne({username});
        if(!user) return {
            data:"User Not Found, Input a valid Training",
            statuscode:404
        }

        if(!user.canDelete) return {
            data: "Cannot delete super user",
            statuscode: 403
        }

        const resData = await deleteUser(username);
        return {
            data: resData,
            statuscode: 204
        }
    } catch (err) {
        return {
            data: "Error while delete a User: "+err.message,
            statuscode: 500
        }
    }
}

module.exports = {
    create,
    findAll,
    update,
    remove
};