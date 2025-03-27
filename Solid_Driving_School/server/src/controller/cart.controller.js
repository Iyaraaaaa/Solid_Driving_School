const cartService = require('../service/cart.service ');
const {create,findAll,remove} = cartService;

 
const saveCart = async (req, res, next) => {
  
      const cartData = req.body;  
      const responseData = await create(cartData);
      res.status(responseData.statuscode).json(responseData.data);  
}


const findAllCarts = async (req, res, next) => {
     
     const responseData = await findAll(req.query);
     res.status(responseData.statuscode).json(responseData.data);
}
 
  const deleteCart = async (req, res) => {
 
      const {cartId} = req.params;      
      const responseData = await remove(cartId);
      res.status(responseData.statuscode).json(responseData.data);
 
  }
 



module.exports = {saveCart,findAllCarts,deleteCart};