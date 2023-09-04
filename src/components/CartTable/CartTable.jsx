import React from 'react'

const CartTable = () => {
    return (
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Magic Mouse 2
            </th>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">$99</td>
            <td className="px-6 py-4">
              <button className="rounded-lg primary-btn">Pay</button>
            </td>
            <td className="px-6 py-4">
              <button className="font-medium text-red-600 dark:text-blue-500 hover:underline">
                Delete
              </button>
            </td>
          </tr>
    )
}

export default CartTable