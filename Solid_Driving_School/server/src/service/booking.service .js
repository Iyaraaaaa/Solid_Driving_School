const Booking = require('../model/booking.model');
const bookingRepo = require('../repository/booking.repository ');
const {createBooking,findAllBookings,deleteBooking,updateBooking} = bookingRepo;

 
const create = async (booking) => {

    try{
        const resData = await createBooking(booking);
        return {
            data:"Booking Successfully completed",
            statuscode:201
           }
    }catch(err){
        return {
            data:"Booking Registraion Error",
            statuscode:500
           }
    }
}

const findAll = async (queryparamobject) => {

    const {date, user, trainer} = queryparamobject;

    const query = {};

    if(date && date.trim() !== '') query.date = { $regex: date};
    if(user && user.trim() !== '') query.user = { $regex: user, $options: 'i' };
    if(trainer && trainer.trim() !== '') query.trainer = { $regex: trainer, $options: 'i' };

    try{
        const resData = await findAllBookings(query);
        return {
            data:resData,
            statuscode:201
        }

    }catch(err){
        return {
            data:"Error while fetching bookings: "+err.message,
            statuscode:500
           }
    }

}

const update = async (booking) => {

    try{
        const resData = await updateBooking(booking);
        return {
            data:resData,
            statuscode:201
        }

    }catch(err){
        return {
            data:"Error while updating bookings: "+err.message,
            statuscode:500
           }
    }

}

const remove = async (bookingId) => {

    try{
        if(!await Booking.findOne({_id:bookingId})) return {
            data:"Triner Not Found, Input a valid booking",
            statuscode:404
        }
        const resData = await deleteBooking(bookingId);
        return {
            data:resData,
            statuscode:204
        }

    }catch(err){
        return {
            data:"Error while deleting bookings: "+err.message,
            statuscode:500
           }
    }

}

module.exports = {
    create,
    findAll,
    update,
    remove
}