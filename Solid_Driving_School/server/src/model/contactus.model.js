const mongoose = require('mongoose');

const contactusSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    address:{
        type:String,
        trim:true
    },
    contact:{
        type:String,
        required:true,
        trim:true
    },
    message:{
        type:String,
        required:true,
        trim:true
    }
   

});



const ContactUs = mongoose.model("ContactUs",contactusSchema);

module.exports = ContactUs;