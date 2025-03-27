const express = require('express');
const bookingController = require('../controller/booking.controller');
const permission = require('../middleware/permisson.middleware');
const authenticate = require('../middleware/auth.middleware');
const {saveBooking,findAllBookings,updateBooking,deleteBooking} = bookingController;

 
const router = express.Router();


// router.get('/', authenticate, permission('booking:READ'), findAllBookings);
// router.post('/', authenticate, permission('booking:CREATE'), saveBooking);
// router.put('/', authenticate, permission('booking:UPDATE'), updateBooking);
// router.delete('/:bookingId', authenticate, permission('booking:DELETE'), deleteBooking);

router.get('/',  findAllBookings);
router.post('/',  saveBooking);
router.put('/',  updateBooking);
router.delete('/:bookingId', deleteBooking);





module.exports = router;