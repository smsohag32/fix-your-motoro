"use client";
import React, { useEffect, useState } from 'react';
import UserPaymentsTable from './UserAddToCardTable';
import Link from 'next/link';

const UserAddToCard = () => {
    const [cart, setcart] = useState([]);

    useEffect(() => {
        fetch("/data/add_to_cart.json")
            .then((res) => res.json())
            .then((data) => {
                setcart(data)
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);
    return (
        <div className='md:mt-16'>
            <table className="mx-auto md:w-3/5">
                <thead>
                    <tr className='text-[20px] text-white primary-bg'>
                        <th className="px-6 py-3 leading-4 tracking-wider text-left ">
                            <label>
                                <input type="checkbox" className="" />
                            </label>
                        </th>
                        <th className="px-6 py-3 leading-4 tracking-wider text-left ">
                            Service Name
                        </th>
                        <th className="px-6 py-3 leading-4 tracking-wider text-left ">
                            Price
                        </th>
                        <th className="px-6 py-3 leading-4 tracking-wider text-left ">
                            Quantity
                        </th>
                        <th className="px-6 py-3 leading-4 tracking-wider text-left ">
                            Total Price
                        </th>
                        <th className="px-6 py-3 leading-4 tracking-wider text-left ">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {
                        cart.map((singleClass, i) => (
                            <UserPaymentsTable
                                key={singleClass.service_id}
                                singleClass={singleClass}
                                i={i}
                            />
                        ))}
                </tbody>
                <div className="flex justify-end mt-4">
                    <Link href="/dashboard/user/user_add_to_card/proceed_to_checkout"
                        className="primary-btn"
                    >
                        PROCEED TO CHECKOUT
                    </Link>
                </div>
            </table>

        </div>
    );
};

export default UserAddToCard;