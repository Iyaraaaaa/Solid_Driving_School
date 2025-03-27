const mongoose = require('mongoose');


const permissionSchema = new mongoose.Schema({

    permission:{
        type:String,
        require:true,
        unique:true
    }
    
});

const Permission = mongoose.model("Permission",permissionSchema);

module.exports = Permission;