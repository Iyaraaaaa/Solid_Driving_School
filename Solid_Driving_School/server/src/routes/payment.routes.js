const express = require('express');
const paymentController = require('../controller/payment.controller');
const permission = require('../middleware/permisson.middleware');
const authenticate = require('../middleware/auth.middleware');
const {savePayment,findAllPayments,createCheckoutSession,getSession} = paymentController;

 
const router = express.Router();


// router.get('/', authenticate, permission('payment:READ'), findAllPayments);
// router.post('/', authenticate, permission('payment:CREATE'), savePayment);
// router.put('/', authenticate, permission('payment:UPDATE'), updatePayment);
// router.delete('/:paymentId', authenticate, permission('payment:DELETE'), deletePayment);

router.get('/',  findAllPayments);
router.post('/',  savePayment);
router.post('/create-checkout-session', createCheckoutSession);
router.get('/:sessionId', getSession);





module.exports = router;