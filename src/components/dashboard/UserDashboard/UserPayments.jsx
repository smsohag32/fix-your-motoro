"use client";
import React, { useEffect, useState } from 'react';
import UserPaymentsTable from './UserPaymentsTable';

const UserPayments = () => {
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
        <div className='mx-auto md:w-4/5'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-[20px] rounded-md text-white primary-bg'>
                            <th>Sl</th>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((singleClass, i) => (
                                <UserPaymentsTable
                                    key={singleClass.service_id}
                                    singleClass={singleClass}
                                    i={i}
                                />
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserPayments;