const paymentService = require('../service/payment.service');
const Training = require('../model/training.model');
const TrainingService = require('../service/training.service')
const {create,findAll} = paymentService;
const stripe = require('stripe')('sk_test_51Q6vAvP3X0wNnVBgXnne36Tkzwy4ECyfvdWamiFhBJX3heJUcrCMCGRD4Iy307sPWVL6CCR4JJ6kGEPh837TVR3b00ttViZIdB')

 
const savePayment = async (req, res, next) => {
  
      const paymentData = req.body;  
      const responseData = await create(paymentData);
      res.status(responseData.statuscode).json(responseData.data);  
}


const findAllPayments = async (req, res, next) => {
     
     const responseData = await findAll();
     res.status(responseData.statuscode).json(responseData.data);
}

const createCheckoutSession = async (req, res) => {
   
      

      // const selectedtraining = await TrainingService.findById(req.body._id);
      // console.log(selectedtraining);

      const product = await stripe.products.create({
            name: 'Total amount',
            images:['https://www.apaservices.org/images/title-payment-platform_tcm9-282170_w1024_n.jpg']
      });

      console.log(product);
      
      const price = await stripe.prices.create({
            product: product.id,
            unit_amount: req.body.amount*100,
            currency: 'lkr',
      });

      console.log(price);

      const session = await stripe.checkout.sessions.create({
            line_items: [
              {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: price.id,
                quantity: 1,
              },
            ],
            mode: 'payment',
            success_url: `http://localhost:5173/payment/success`,
            cancel_url: `http://localhost:5173/payment/cancel`,
      });
        
      res.redirect(303, session.id);

}

const getSession =  async (req, res) => {

      const sessionId = req.params.sessionId;
      try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        res.status(200).json(session);
      } catch (error) {
        res.status(404).send('Session not found');
      }
    }


module.exports = {savePayment,findAllPayments,createCheckoutSession, getSession};