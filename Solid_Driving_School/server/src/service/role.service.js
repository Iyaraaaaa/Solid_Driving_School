const roleRepo = require('../repository/role.repository');
const {findAllRoles} = roleRepo;


const findAll = async () =>{

    try{
        
        return {
            data : await findAllRoles(),
            statuscode : 200
        }

    }catch(err){
        return {
            data : "User Roles Fetching Error: "+err.message,
            statuscode : 500
        }
    }
} 


module.exports = {
    findAll
}