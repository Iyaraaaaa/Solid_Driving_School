const mongoose = require('mongoose');


const cartSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    training:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Training",
        // unique:true
    }]
});




const Cart = mongoose.model("Cart",cartSchema);

module.exports = Cart;