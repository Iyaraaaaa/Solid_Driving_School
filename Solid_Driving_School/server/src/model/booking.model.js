const mongoose = require('mongoose');
const User = require('./user.model');
const Trainer = require('./trainer.model');

const bookingSchema = new mongoose.Schema({



    createddate:{
        type: Date,
         default: Date.now 
    },
    bookingdate:{
        type:Date,
        require:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    trainer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Trainer",
        required:true

    }

});


bookingSchema.post('save', async function(booking) {
    try{
        await User.updateOne({_id:booking.user},{$push:{booking:booking._id}});
        await Trainer.updateOne({_id:booking.trainer},{$push:{booking:booking._id}});
    }catch(err){
        console.error("Error in updating the User.booking field: "+err)
    }
});



bookingSchema.post('findOneAndDelete', async function(booking) {
    try{
        await User.updateOne({_id:booking.user},{$pull:{booking:booking._id}});
        await Trainer.updateOne({_id:booking.trainer},{$pull:{booking:booking._id}});
    }catch(err){
        console.error("Error in updating the User.booking field: "+err)
    }
});





const Booking = mongoose.model("Booking",bookingSchema);

module.exports = Booking;