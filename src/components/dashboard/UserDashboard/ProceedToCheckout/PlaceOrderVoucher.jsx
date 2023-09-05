"use client"
import React, { useEffect, useState } from 'react';

const UserAddToCardTable = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch("/data/add_to_cart.json")
            .then((res) => res.json())
            .then((data) => {
                setCartItems(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);



    // Calculate items total
    const itemsTotal = cartItems.reduce((total, item) => total + item.service_price * item.quantity, 0);

    // Calculate VAT (assuming a 10% VAT rate)
    const vatRate = 0.1; // 10%
    const vat = itemsTotal * vatRate;

    // Calculate total payment (items total + VAT)
    const totalPayment = itemsTotal + vat;

    return (
        <div className="max-w-3xl p-4 mx-auto mt-6 bg-white divide-gray-200 rounded-md">
            <div className="p-4 mb-6 border-b-2 border-gray-300">
                <div className="flex justify-between mb-2">
                    <span className="font-bold">Quantity:</span>
                    <span>{cartItems.length}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="font-bold">Items Total:</span>
                    <span>${itemsTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="font-bold">VAT (10%):</span>
                    <span>${vat.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-bold">Total Payment:</span>
                    <span>${totalPayment.toFixed(2)}</span>
                </div>
            </div>
            <div className='flex justify-center'>
            <button className="primary-btn"> PLACE ORDER </button>

            </div>
        </div>
    );
};

export default UserAddToCardTable;
