const Role = require("../model/role.model");

    //dao method to get data
    const findAllRoles = async() => {
        try{
            //fetching data from database
            return await Role.find({}).exec();

        }catch(error){
            //throw error if error occured
            throw new Error(`Error fetching userstatus: ${error.message}`);
        }
    }

//export all the dao methods
module.exports = {findAllRoles}