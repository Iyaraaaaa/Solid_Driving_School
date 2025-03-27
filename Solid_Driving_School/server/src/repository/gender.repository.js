const Gender = require("../model/gender.model");

    
    const findAllGenders = async() => {
        try{

            return await Gender.find({}).exec();

        }catch(error){
            throw new Error(`Error fetching gender: ${error.message}`);
        }
    }



module.exports = {
    findAllGenders
}