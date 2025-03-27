const ContactUs = require('../model/contactus.model');
const contactusRepo = require('../repository/contactus.repository ');
const {createContactUs,findAllContactUs,deleteContactUs} = contactusRepo;

 
const create = async (contactus) => {

    try{
        const resData = await createContactUs(contactus);
        return {
            data:"Message Successfully Sent",
            statuscode:201
           }
    }catch(err){
        return {
            data:"Message Not Sent: "+err.message,
            statuscode:500
           }
    }
}

const findAll = async (queryparamobject) => {

    const {name,email} = queryparamobject;

    const query = {};

    if(name && name.trim() !== '') query.name = { $regex: name, $options: 'i' };
    if(email && email.trim() !== '') query.email = { $regex: email, $options: 'i' };

    try{
        const resData = await findAllContactUs(query);
        return {
            data:resData,
            statuscode:201
        }

    }catch(err){
        return {
            data:"Error while fetching messages: "+err.message,
            statuscode:500
           }
    }

}



const remove = async (contactusId) => {

    try{
        if(!await ContactUs.findOne({_id:contactusId})) return {
            data:"ContactUs Not Found, Input a valid ContactUs",
            statuscode:404
        }
        const resData = await deleteContactUs(contactusId);
        return {
            data:resData,
            statuscode:204
        }

    }catch(err){
        return {
            data:"Error while deleting contactus: "+err.message,
            statuscode:500
           }
    }

}

module.exports = {
    create,
    findAll,
    remove
}