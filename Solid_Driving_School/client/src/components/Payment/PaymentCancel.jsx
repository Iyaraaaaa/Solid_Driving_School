import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const PaymentCancel = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center font-bold w-full h-full">
    <h1>Payment Successfull</h1>
    <Link to={'/storepage'}>
      <Button variant='contained' color='secondary'>Return to store</Button>
    </Link>
</div>
  );
};

export default PaymentCancel;
