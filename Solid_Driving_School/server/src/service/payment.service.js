const paymentRepo = require('../repository/payment.repository ');
const {createPayment,findAllPayments,deletePayment,updatePayment} = paymentRepo;

 
const create = async (payment) => {

    try{
        const resData = await createPayment(payment);
        return {
            data:"Payment Successfully completed",
            statuscode:201
           }
    }catch(err){
        return {
            data:"Payment Registraion Error",
            statuscode:500
           }
    }
}

const findAll = async () => {


    try{
        const resData = await findAllPayments();
        return {
            data:resData,
            statuscode:201
        }

    }catch(err){
        return {
            data:"Error while fetching payments: "+err.message,
            statuscode:500
           }
    }

}




module.exports = {
    create,
    findAll
}