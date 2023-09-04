import React from 'react';
import { MdDeleteOutline } from 'react-icons/md';

const ProceedToCheckoutTable = ({ singleClass }) => {
    const { service_name, service_price, quantity } = singleClass;

    // Function to remove the item from the cart
    const removeItem = () => {
        // Add your logic here to remove the item from the cart
        // For example, you can use a callback function to remove it from your state or data structure
    };

    return (
        <tr className=''>
            <td className="px-6 py-4 whitespace-no-wrap">
                <input type="checkbox" className="" />
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">{service_name}</td>
            <td className="px-6 py-4 whitespace-no-wrap">${service_price}</td>
            <td className="px-6 py-4 whitespace-no-wrap">{quantity}</td>
            <td className="px-6 py-4 whitespace-no-wrap">${service_price * quantity}</td>
            <td className="px-6 py-4 whitespace-no-wrap">
                <button
                    className="p-1 text-2xl text-white bg-red-600 rounded-md hover:bg-red-900"
                    onClick={removeItem}
                >
                    <MdDeleteOutline />
                </button>
            </td>
        </tr>
    );
};

export default ProceedToCheckoutTable;
