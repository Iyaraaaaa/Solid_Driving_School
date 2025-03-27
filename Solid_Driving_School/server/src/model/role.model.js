const mongoose = require('mongoose');


const roleSchema = new mongoose.Schema({

    name:{
        type:String,
        require:true,
        unique:true
    },
    permission:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Permission",
        require:true
    }]


});




const Role = mongoose.model("Role",roleSchema);

module.exports = Role;