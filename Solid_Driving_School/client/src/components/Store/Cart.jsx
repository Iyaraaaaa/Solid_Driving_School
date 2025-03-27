// Cart.js
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import toast from "react-hot-toast";
import Button from '@mui/material/Button'; 
import { loadStripe } from '@stripe/stripe-js';


const CartUrl = 'http://localhost:3000/api/cart';

const stripePromise = loadStripe('pk_test_51Q6vAvP3X0wNnVBgdCv164HePC45G96IrN8TbSOucxSQcl6cBZTPkzsYxP5p1Cxx1HKQ4AozDxBGSuxLKdOOakpB009o3LgpFu');


const Cart = () => {
    const [cart, setCart] = useState([]);
    const [trainings, setTrainings] = useState([]);
    const loggeduser = JSON.parse(localStorage.getItem("auth_user")); // Get logged user info
    const userId = loggeduser?._id;
    const navigate = useNavigate();
    const [sessionId, setSessionId] = useState(null);
    const [totalAmount, setTotalAmount] = useState(null);

    useEffect(() => {

        axios.get(`http://localhost:3000/api/trainings`)
            .then((responce) => {
                setTrainings(responce.data);
            }).catch(err =>{
            console.log("Error : " + err);
        })

        axios.get(`${CartUrl}?user=${userId}`)
            .then(response => {
                setCart(response.data)
            })
            .catch(error => {
                toast.error("Error Fetching Cart");
                console.error('Error fetching cart:', error)
            });
    }, []);

    const handleRemoveFromCart = (itemId) => {
        axios.delete('http://localhost:3000/api/cart/'+itemId)
            .then(() => {
                toast.success("Training Successfully Removed")
                window.location.reload();
            })
            .catch(error => {
                toast.error('Error removing from cart');
                console.error('Error removing from cart:', error);
            });
    };

    const deleteAllById = (userId) => {
        axios.delete('http://localhost:3000/api/cart/deleteall'+userId)
            .then(() => {
                toast.success("Training Successfully Removed")
            })
            .catch(error => {
                toast.error('Error removing from cart');
                console.error('Error removing from cart:', error);
            });
    }

    const handleCheckout = async () => {
        const res = await axios.post('http://localhost:3000/api/payments/create-checkout-session', {amount:totalPrice});
        const stripe = await stripePromise;
        const { id } = res.data;
        setSessionId(id);
      
        // Redirect to Stripe Checkout
        stripe.redirectToCheckout({ sessionId: id })
        .then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
            
        })
    };

 
    const totalPrice = cart.reduce((total, item) => {
        const training = trainings.find(t => t._id === item?.training[0]?._id);
        return total + (training?.price || 0);
    }, 0);



    return (
        <div className="p-6 px-56">
            <div className="container mx-auto py-4 flex flex-col gap-10">
            <div className="w-full flex justify-between items-center">
                <h1 className="font-bold text-2xl mb-4">Your Cart</h1>
                <Button
                    variant='outlined'create-checkout-session
                    color='secondary'
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
                    onClick={() => navigate('/storepage')}
                >
                    Back to Store
                </Button>
            </div>
            <div className="w-full h-full flex justify-center items-center gap-6">
                <div className="w-2/3 h-[40rem] shadow-md rounded-md overflow-y-auto scrollbar-thin scrollbar-webkit ">
                {cart.length === 0 ? (
                    <div className="p-4 text-center text-gray-600">No items added.</div>
                ) : (
                    <>
                        <ul className="p-4">
                            {cart.map((item, i) => {
                                const training = trainings.find(t => t._id === item?.training[0]?._id); // Find the matching training object
                                return (
                                    <li key={i} className=" flex items-center mb-2 p-4 shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_rgba(0,0,0,0.06)] rounded-lg justify-between">
                                       <div className="flex justify-center gap-4">
                                       <img src={`data:image/png;base64,${training?.photo}`} alt=""
                                             className="w-12 object-cover mr-2"/>
                                        {training?.name} - Rs. {training?.price.toFixed(2)}
                                       </div>
                                       

                                        <Button className="ml-2 text-red-500"
                                                variant='outlined'
                                                color='error'
                                                onClick={() => handleRemoveFromCart(item._id)}>
                                            Remove
                                        </Button>
                                    </li>
                                )
                            })}
                        </ul>
                      
                    </>
                )}
                
                </div>
                <div className="w-1/3 h-[40rem] shadow-md rounded-md flex flex-col p-6">

                    <div className="w-full h-[15%]  bg-slate-100 text-gray-500  rounded-md flex justify-center items-center">
                    
                
                    </div>
                    <div className="w-full h-[75%] flex flex-col justify-start items-start mt-10 gap-8">

                        <img src="https://www.apaservices.org/images/title-payment-platform_tcm9-282170_w1024_n.jpg" alt="photo" />

                    </div>
                    <div className="w-full h-[10%] p-4 text-center font-bold flex justify-between items-center">
                        Total Amount : {totalPrice.toFixed(2)}
                        <Button 
                            variant='contained'
                            color='primary'
                            onClick={handleCheckout}
                        >
                            Checkout
                         </Button>
                        </div>
                </div>
            </div>
                
            </div>
        </div>
    );
};

export default Cart;
