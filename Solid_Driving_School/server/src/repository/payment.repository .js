const Payment = require('../model/payment.model');

 
     const createPayment = async (payment) => {
        
        try{

            const newPayment = new Payment(payment);
            return await newPayment.save();

        }catch(error){
            throw new Error(`Error  while creating a payment: ${error.message}`);
        }

    }

  


     const findAllPayments = async() => {
        try{

            return await Payment.find().exec();

        }catch(error){
            
            throw new Error(`Error while fetching payments: ${error.message}`);
        }
    }


    module.exports = {createPayment,findAllPayments};