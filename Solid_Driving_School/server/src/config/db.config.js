const mongoose = require('mongoose');
const UserStatus = require('../model/userstatus.model');
const User = require('../model/user.model');
const Gender = require('../model/gender.model');
const Trainer = require('../model/trainer.model');
const Training = require('../model/training.model');
const ContactUs = require('../model/contactus.model');
const Booking = require('../model/booking.model');
const Cart = require('../model/cart.model');
const Role = require('../model/role.model');
const Permission = require('../model/permission.model');
const Payment = require('../model/payment.model');






const connectToMongoDB = async () => {
    try {
      //Connect to MongoDB Using URI
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Connected to MongoDB");
    } catch (error) {
      //log errors if not connect
      console.log("Error connecting to MongoDB", error.message);
    }
  };


  module.exports = connectToMongoDB;