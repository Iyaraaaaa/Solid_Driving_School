const bookingService = require('../service/booking.service ');
const {create,findAll,update,remove} = bookingService;

 
const saveBooking = async (req, res, next) => {
  
      const bookingData = req.body;  
      const responseData = await create(bookingData);
      res.status(responseData.statuscode).json(responseData.data);  
}


const findAllBookings = async (req, res, next) => {
     
     const responseData = await findAll(req.query);
     res.status(responseData.statuscode).json(responseData.data);
}

  const updateBooking = async (req, res) => {
      const updatedBooking = req.body;
      const responseData = await update(updatedBooking);
      res.status(responseData.statuscode).json(responseData.data);
 
  }
 
  const deleteBooking = async (req, res) => {
 
      const {bookingId} = req.params;      
      const responseData = await remove(bookingId);
      res.status(responseData.statuscode).json(responseData.data);
 
  }
 
  



module.exports = {saveBooking,findAllBookings,updateBooking,deleteBooking};