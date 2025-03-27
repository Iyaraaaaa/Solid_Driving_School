const UserStatus = require("../model/userstatus.model");

    //dao method to get data
    const findAllUserStatuses = async() => {
        try{
            //fetching data from database
            return await UserStatus.find({}).exec();

        }catch(error){
            //throw error if error occured
            throw new Error(`Error fetching userstatus: ${error.message}`);
        }
    }

//export all the dao methods
module.exports = {findAllUserStatuses}