const mongoose = require('mongoose');

const userstatusSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    }

})

const UserStatus = mongoose.model('UserStatus', userstatusSchema);
module.exports = UserStatus;
