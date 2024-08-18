import React from 'react';
import HeaderBar from '../../components/user/HeaderBar';

function Order() {
    const orders = [
        {
            orderId: '123456789',
            total: 1990.00,
            items: [
                {
                    id: 1,
                    image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-html/assets/images/product-image/96_1.jpg',
                    name: 'Running & Trekking Shoes',
                    quantity: 1,
                    price: 1590.00,
                },
                {
                    id: 2,
                    image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-html/assets/images/product-image/93_1.jpg',
                    name: 'Mens Winter Leathers Jacket',
                    quantity: 1,
                    price: 990.00,
                },
                {
                    id: 3,
                    image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-html/assets/images/product-image/88_1.jpg',
                    name: 'Relaxed Short full Sleeve T-Shirt',
                    quantity: 1,
                    price: 990.00,
                },
                {
                    id: 4,
                    image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-html/assets/images/product-image/93_1.jpg',
                    name: 'Mens Winter Leathers Jacket',
                    quantity: 1,
                    price: 990.00,
                },
            ]
        },
        {
            orderId: '987654321',
            total: 850.00,
            items: [
                {
                    id: 3,
                    image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-html/assets/images/product-image/6_2.jpg',
                    name: 'Round Neck T-Shirt',
                    quantity: 1,
                    price: 850.00,
                }
            ]
        }
    ];

    return (
        <>
            <div>
                <HeaderBar />
            </div>


            <div className="py-10 px-5 mb-20 sm:mb-0">
                <h1 className="text-xl text-gray-500 font-semibold font-serif">Your Orders</h1>

                <div className="mt-5 flex flex-col gap-4">
                    {orders.map((order) => (
                        <div key={order.orderId} className="px-5 pt-2 pb-4 border bottom-1 border-slate-300 bg-white rounded-xl">
                            <div className="flex justify-between items-center">
                                <label className="sm:font-semibold text-slate-700">
                                    <span className='font-mono text-lg'>Order </span>
                                    <span className='text-base sm:text-lg'>#{order.orderId}</span>
                                </label>

                                <div className='flex gap-8'>
                                    <div className="hidden sm:block text-gray-700">
                                        Total: ₹ {order.total.toFixed(2)}
                                    </div>
                                    <button
                                        // onClick={() => viewOrderDetails(order.orderId)}
                                        className="text-blue-500 hover:underline"
                                    >
                                        View Order
                                    </button>
                                </div>
                            </div>


                            <div className="mt-5 flex flex-wrap sm:flex-row flex-col gap-3">
                                {order.items.slice(0, 3).map((item) => (
                                    <div key={item.id} className="flex flex-grow gap-2 lg:max-w-[30%]">
                                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                                        <div className="flex flex-col overflow-hidden">
                                            <p className="text-lg truncate">{item.name}</p>
                                            <div className='flex justify-between gap-4 pr-3'>
                                                <p className="text-gray-600">Quantity: {item.quantity}</p>
                                                <p className="text-gray-600 font-bold">₹ {item.price.toFixed(2)}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {order.items.length > 3 && (
                                    <div className="flex justify-center items-center text-gray-500 font-semibold">
                                        & more
                                    </div>
                                )}
                            </div>


                            <div className="sm:hidden mt-4 text-right font-bold text-gray-600">
                                Total: ₹ {order.total.toFixed(2)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Order
