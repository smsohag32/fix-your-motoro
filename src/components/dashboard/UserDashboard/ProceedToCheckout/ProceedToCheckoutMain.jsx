import React from 'react';
import ProceedToCheckoutFetch from './ProceedToCheckoutFetch';
import PlaceOrderVoucher from './PlaceOrderVoucher';

const ProceedToCheckout = () => {
    return (
        <div className='flex md:mt-16'>
            <div className='w-4/6 md:pl-16'>
                <ProceedToCheckoutFetch/>
            </div>
            <div className='w-2/6 md:mt-28 md:pr-16'>
                <PlaceOrderVoucher/>
            </div>
        </div>
    );
};

export default ProceedToCheckout;