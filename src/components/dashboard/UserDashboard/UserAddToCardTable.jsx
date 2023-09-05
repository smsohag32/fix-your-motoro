import React, { useState } from 'react';
import { MdDeleteOutline } from 'react-icons/md';

const UserAddToCardTable = ({ singleClass, i }) => {
    const { service_name, service_price } = singleClass;
    const [quantity, setQuantity] = useState(1); // Initialize quantity with 1

    // Function to increase the quantity
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    // Function to decrease the quantity, with a minimum of 1
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    // Calculate total price
    const totalPrice = service_price * quantity;
    return (
        <tr className=''>
            <td className="px-6 py-4 whitespace-no-wrap">
                <input type="checkbox" className="" />
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">{service_name}</td>
            <td className="px-6 py-4 whitespace-no-wrap">{service_price}</td>
            <td className="px-6 py-4 whitespace-no-wrap">
                <div className="flex items-center">
                    <button
                        className="px-[10px] py-1 text-white bg-blue-500 rounded-l focus:outline-none"
                        onClick={decreaseQuantity}
                    >
                        -
                    </button>
                    <span className="px-3 py-1">{quantity}</span>
                    <button
                        className="px-2 py-1 text-white bg-blue-500 rounded-r focus:outline-none"
                        onClick={increaseQuantity}
                    >
                        +
                    </button>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">{totalPrice}</td>
            <td className="px-6 py-4 whitespace-no-wrap">
                <button
                    className="p-1 text-2xl text-white bg-red-600 rounded-md hover:bg-red-900"
                >
                    <MdDeleteOutline />
                </button>
            </td>
        </tr>
    );
};

export default UserAddToCardTable;