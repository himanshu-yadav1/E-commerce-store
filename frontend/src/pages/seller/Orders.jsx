import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaPen, FaEllipsisV } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Orders() {

    const orders = [
        {
            id: '#123456',
            image: '/images/seller-dashboard/product-detail-3.png',
            customer: 'Bhavesh Markue',
            price: '$140',
            status: 'DELIVERED',
            date: '2021-10-30',
        },
        {
            id: '#154844',
            image: '/images/seller-dashboard/product-detail-1.png',
            customer: 'Jane Doe',
            price: '$120',
            status: 'PENDING',
            date: '2021-11-02',
        },
        {
            id: '#202587',
            image: '/images/seller-dashboard/product-detail-3.png',
            customer: 'John Smith',
            price: '$200',
            status: 'CANCELLED',
            date: '2021-11-05',
        },
        {
            id: '#300411',
            image: '/images/seller-dashboard/product-detail-1.png',
            customer: 'Alice Johnson',
            price: '$150',
            status: 'DELIVERED',
            date: '2021-11-10',
        },
        {
            id: '#785241',
            image: '/images/seller-dashboard/product-detail-3.png',
            customer: 'Bob Brown',
            price: '$180',
            status: 'DELIVERED',
            date: '2021-11-15',
        }
    ];


    const [expandedOrderId, setExpandedOrderId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedOrderId(expandedOrderId === id ? null : id);
    };

    return (
        <div className="bg-mainBgColor py-mainPaddingY px-mainPaddingX min-h-[100vh]">
            <div className="bg-cardBg px-cardPaddingX py-cardPaddingY rounded-2xl shadow-cardShadow border-t-cardBorderTop">
                <div className="flex justify-between items-center md:pb-4 md:border-b md:border-gray-200">
                    <h2 className="text-xl font-semibold">Orders</h2>

                    <select name="" id="" className='border border-slate-400 sm:w-[150px] px-2 py-1 rounded-md focus:outline-none'>
                        <option value="">All</option>
                        <option value="">Delivered</option>
                        <option value="">Pending</option>
                        <option value="">Cancelled</option>
                    </select>
                </div>



                <div className="hidden md:block">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-nowrap">Customer</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-nowrap">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-nowrap">Date</th>
                                </tr>
                            </thead>


                            <tbody className="divide-y divide-gray-200">
                                {orders.map((order) => (
                                    <tr key={order.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">{order.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">{order.customer}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">{order.price}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">{order.status}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">{order.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>



                <div className="block md:hidden mt-6">
                    {orders.map((order) => (
                        <div key={order.id} className="p-4 my-2 rounded-xl border border-slate-200">
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-semibold">{order.id}</span>
                                <div className="flex items-center">
                                    <button onClick={() => toggleExpand(order.id)}>
                                        {expandedOrderId === order.id ? <FaChevronUp /> : <FaChevronDown />}
                                    </button>
                                </div>
                            </div>
                            {expandedOrderId === order.id && (
                                <div className="mt-5 px-4 rounded-lg">
                                    <p><strong>Customer:</strong> {order.customer}</p>
                                    <p><strong>Price:</strong> {order.price}</p>
                                    <p><strong>Status:</strong> <span className={`text-${order.status === 'DELIVERED' ? 'green-500' : 'red-500'}`}>{order.status}</span></p>
                                    <p><strong>Date:</strong> {order.date}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Orders
