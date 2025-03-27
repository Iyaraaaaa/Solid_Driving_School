import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center font-bold w-full h-full">
        <h1>Payment Successfull</h1>

        <Link to={'/storepage'}>
          <Button variant='contained' color='secondary'>Return to store</Button>
        </Link>
    </div>
  );
};

export default PaymentSuccess;
