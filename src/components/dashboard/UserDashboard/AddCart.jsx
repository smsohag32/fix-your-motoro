import PageTitle from '@/components/Shared/PageTitle/PageTitle';
import React from 'react';

const AddCard = () => {
    return (

        <div className="relative overflow-x-auto md:mt-40">
            <PageTitle
                title="Add To Cart"
                subTitle="View Your Add to Card"
            />
            <table className="md:w-[80%] w-full mx-auto text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 rounded-l-lg">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Qty
                        </th>
                        <th scope="col" className="px-6 py-3 rounded-r-lg">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Pay
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple MacBook Pro 17
                        </th>
                        <td className="px-6 py-4">
                            1
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                        <td className="px-6 py-4">
                            <button className="rounded-lg primary-btn">Pay</button>
                        </td>
                        <td className="px-6 py-4">
                            <button className="font-medium text-red-600 dark:text-blue-500 hover:underline">Delete</button>
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Microsoft Surface Pro
                        </th>
                        <td className="px-6 py-4">
                            1
                        </td>
                        <td className="px-6 py-4">
                            $1999
                        </td>
                        <td className="px-6 py-4">
                            <button className="rounded-lg primary-btn">Pay</button>
                        </td>
                        <td className="px-6 py-4">
                            <button className="font-medium text-red-600 dark:text-blue-500 hover:underline">Delete</button>
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">
                            1
                        </td>
                        <td className="px-6 py-4">
                            $99
                        </td>
                        <td className="px-6 py-4">
                            <button className="rounded-lg primary-btn">Pay</button>
                        </td>
                        <td className="px-6 py-4">
                            <button className="font-medium text-red-600 dark:text-blue-500 hover:underline">Delete</button>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-3 text-base">Total</th>
                        <td className="px-6 py-3">3</td>
                        <td className="px-6 py-3">$21,000</td>
                        <td className="px-6 py-4">
                            <button className="rounded-lg primary-btn">Pay all</button>
                        </td>
                        <td className="px-6 py-4">
                            <button className="delete-btn">Delete all</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>

    );
};

export default AddCard;