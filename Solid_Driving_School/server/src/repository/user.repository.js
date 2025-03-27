const User = require('../model/user.model');

 
     const createUser = async (user) => {        
        
        try{

            const newUser = new User(user);
            return await newUser.save();

        }catch(error){
            //throw error if error
            throw new Error(`Error creating users: ${error.message}`);
        }
    }


     const findAllUsers = async(searchQuery)=>{
       
        try{
            return await User.find(searchQuery).select('-password').populate('userstatus').populate('training').populate('role').exec();

        }catch(error){
            
            throw new Error(`Error fetching users: ${error.message}`);
        }
    }

    const findUserByUsername = async(username)=> {
        try{
            return await User.findOne({username});
        }catch(error){
            throw new Error(`Error fetching user: ${error.message}`);
        }
    }

    const updateUser = async(user)=> {
        console.log(user);
        
        const {firstname, lastname ,username,photo,userstatus,training,_id,password,role} = user;
        try{
            return await User.updateOne({_id},{$set: {firstname,lastname,username,photo,userstatus,training,password,role}});
        }catch(error){
            throw new Error(`Error while updating user: ${error.message}`);
        }
    }
    

    const deleteUser = async(username)=> {
        try{
            return await User.findOneAndDelete({username});
        }catch(error){
            throw new Error(`Error while delete a user: ${error.message}`);
        }
    }

  


    module.exports = {
        createUser,
        findAllUsers,
        findUserByUsername,
        updateUser,
        deleteUser
    };