import React from 'react';
import { MdOutlineDeleteOutline, MdOutlinePayments } from 'react-icons/md';

const UserPaymentsTable = ({ singleClass, i }) => {
    const { service_name, service_price } = singleClass;

    return (
        <tr className='text-[15px] font-semibold'>
            <th>{i + 1}</th>
            <td >{service_name}</td>
            <td >{service_price}</td>
            <th>
                <button className="p-1 text-2xl text-white rounded-md primary-bg"><MdOutlinePayments /></button>
            </th>
            <th>
                <button className="p-1 text-2xl text-white bg-red-700 rounded-md"><MdOutlineDeleteOutline /></button>
            </th>
        </tr>
    );
};

export default UserPaymentsTable;