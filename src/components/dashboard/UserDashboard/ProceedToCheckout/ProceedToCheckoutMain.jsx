import React from 'react';
import ProceedToCheckoutFetch from './ProceedToCheckoutFetch';
import PlaceOrderVoucher from './PlaceOrderVoucher';

const ProceedToCheckout = () => {
    return (
        <div className='flex w-full md:mt-16'>
            <div className='w-4/6'>
                <ProceedToCheckoutFetch/>
            </div>
            <div className='w-2/6 md:mt-28'>
                <PlaceOrderVoucher/>
            </div>
        </div>
    );
};

export default ProceedToCheckout;