import Link from 'next/link';
import React from 'react';
import { MdOutlineDeleteOutline, MdOutlinePayments } from 'react-icons/md';

const UserAddToCardTable = ({ singleClass, i }) => {
    const { service_name, service_price , quantity } = singleClass;

    return (
        <tr className='text-[15px] font-semibold'>
            <th>{i + 1}</th>
            <td >{service_name}</td>
            <td >{service_price}</td>
            <td>{quantity}</td>
            <th>
                <Link href="/dashboard/user/user_add_to_card/user_overview" className="p-1 text-white rounded-md "><MdOutlinePayments className='bg-[#69d94f] text-2xl' /></Link>
            </th>
            <th>
                <button className="p-1 text-2xl text-white bg-red-700 rounded-md"><MdOutlineDeleteOutline /></button>
            </th>
        </tr>
    );
};

export default UserAddToCardTable;