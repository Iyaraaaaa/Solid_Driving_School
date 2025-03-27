const Booking = require('../model/booking.model');

 
     const createBooking = async (booking) => {
        
        try{

            const newBooking = new Booking(booking);
            return await newBooking.save();

        }catch(error){
            throw new Error(`Error  while creating a booking: ${error.message}`);
        }

    }

    const updateBooking = async (booking) => {
        try{
            const {bookingdata, trainer} = booking;
            return await Booking.updateOne({_id:booking._id},{$set:{bookingdata, trainer}});
        }catch(err){
            throw new Error(`Error  while updating a booking: ${error.message}`);
        }
    } 


     const findAllBookings = async(searchQuery) => {
        try{

            return await Booking.find(searchQuery).populate('user', 'username').populate('trainer', 'name').exec();

        }catch(error){
            
            throw new Error(`Error while fetching bookings: ${error.message}`);
        }
    }


    const deleteBooking = async (bookingId) => {
        try{
         
            return await Booking.findByIdAndDelete(bookingId);

        }catch(error){
            throw new Error(`Error while deleting booking: ${error.message}`);
        }
    }


    module.exports = {createBooking,findAllBookings,deleteBooking,updateBooking};