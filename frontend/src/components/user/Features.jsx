import React from 'react'

function Features() {
    const featureItems = [
        {
            icon: 'images/truck.png',
            title: 'Free Shipping',
            description: 'Free shipping on all order above ₹1000'
        },
        {
            icon: 'images/help-desk.png',
            title: '24X7 Support',
            description: 'Contact us 24 hours a day, 7 days a week'
        },
        {
            icon: 'images/return.png',
            title: '30 Days Return',
            description: 'Simply return it within 30 days for an exchange'
        },
        {
            icon: 'images/credit-card.png',
            title: 'Payment Secure',
            description: 'We ensure secure payment with encryption'
        },
    ];

    return (
        <div className="container mx-auto px-4 py-10">
            <p className='mb-4 uppercase text-2xl text-[#1E4E40]'>Features</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {featureItems.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center text-center bg-white p-5 rounded-2xl shadow-sm border border-gray-200 sm:hover:shadow-lg transition-shadow duration-300 ease-in-out">
                        <img src={feature.icon} alt={feature.title} className="w-16 h-16 mb-4" />
                        <h3 className="text-xl text-gray-800 mb-2">{feature.title}</h3>
                        <p className="text-gray-500">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Features
