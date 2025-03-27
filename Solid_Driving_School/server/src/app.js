const express = require('express');
const cors = require('cors');

const contactusRoutes = require('./routes/contactus.routes ');
const trainerRoutes = require('./routes/trainer.routes');
const trainingRoutes = require('./routes/training.routes ');
const genderRoutes = require('./routes/gender.routes');
const userstatusRoutes = require('./routes/userstatus.routes');
const usersRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');
const bookingRoutes = require('./routes/booking.routes');
const cartRoutes = require('./routes/cart.routes');
const roleRoutes = require('./routes/role.routes');
const paymentRoutes = require('./routes/payment.routes');








const app = express();
app.use(cors({
  origin: ['http://localhost:5173','http://localhost:5174', 'https://checkout.stripe.com/*'] ,// Your React app's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow the headers you want to send
  exposedHeaders: ['jwt_token'] // Expose the custom headers you want to access on the frontend
}));
app.use(express.json());



//Middlewares
app.use('/api/payments', paymentRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/contactus', contactusRoutes);
app.use('/api/trainers', trainerRoutes);
app.use('/api/trainings', trainingRoutes);
app.use('/api/genders', genderRoutes);
app.use('/api/userstatuses', userstatusRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/auth', authRoutes);


module.exports = app;
