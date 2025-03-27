const ContactUs = require('../model/contactus.model');

 
     const createContactUs = async (contactus) => {
        
        try{

            const newContactUs = new ContactUs(contactus);
            return await newContactUs.save();

        }catch(error){
            throw new Error(`Error  while creating contactus: ${error.message}`);
        }
    }


     const findAllContactUs = async(searchQuery) => {
        try{

            return await ContactUs.find(searchQuery).exec();

        }catch(error){
            
            throw new Error(`Error while fetching contactuss: ${error.message}`);
        }
    }


    const deleteContactUs = async (contactusId) => {
        try{
         
            return await ContactUs.findByIdAndDelete(contactusId);

        }catch(error){
            throw new Error(`Error while deleting contactus: ${error.message}`);
        }
    }


    module.exports = {createContactUs,findAllContactUs,deleteContactUs};