const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const bcrypt = require("bcryptjs");

const imagePath = path.join(__dirname,'../assets', 'avatar.jpg');

const userSchema = new mongoose.Schema({
    
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    photo:{
        type:Buffer
    },
    userstatus:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserStatus"
        
    },
    training:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Training"
    }],
    booking:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Booking"

    }],
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Role",
        required:true
    },
    canDelete:{
        type:Boolean,
        default:true
    }

})



// Pre-save hook for password hashing (for new user creation)
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

userSchema.pre('save', async function (next) {
    if (this.photo == null) return next();
    this.photo = fs.readFileSync(imagePath);
    next();
});

// Pre-update hook for password hashing (when updating the password)
userSchema.pre('updateOne', async function (next) {
    const update = this.getUpdate();

    // Check if the password field is being updated
    if (update.password) {
        update.password = await bcrypt.hash(update.password, 12);
    }
    next();
});

userSchema.pre('findOneAndDelete', async function(user) {
    const deleteuser = await User.findById(user._id).populate('role');
    if (deleteuser && deleteuser.role.name === 'SUPER_ADMIN') {
        return res.status(403).json({ message: 'Super Admin cannot be deleted' });
    }
})
const User = mongoose.model("User",userSchema);

module.exports = User;