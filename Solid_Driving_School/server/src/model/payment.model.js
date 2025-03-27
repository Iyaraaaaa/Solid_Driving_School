const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({



    createddate:{
        type: Date,
         default: Date.now 
    },
    total:{
         type: Number
    },
    cardnumber:{
        type: Number
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }

});







const Payment = mongoose.model("Payment",paymentSchema);

module.exports = Payment;