const genderRepo = require('../repository/gender.repository');
const {findAllGenders} = genderRepo;


const findAll = async () =>{

    try{
        
        return {
            data : await findAllGenders(),
            statuscode : 200
        }

    }catch(err){
        return {
            data : "Gender Fetching Error: "+err.message,
            statuscode : 500
        }
    }
} 


module.exports = {
    findAll
}