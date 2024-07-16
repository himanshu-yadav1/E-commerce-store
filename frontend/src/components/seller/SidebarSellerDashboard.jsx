import { useState } from "react"
import { FiPlus } from "react-icons/fi"
import { Link } from "react-router-dom"

function SidebarSellerDashboard({ handleSidebarVisibility }) {
    const [activeTab, setActiveTab] = useState('Dashboard')

    const tabs = [
        {
            title: 'Dashboard',
            img: '../images/seller-dashboard/pie-chart.png',
            to: '/seller/dashboard'
        },
        {
            title: 'Products',
            img: '../images/seller-dashboard/products.png',
            to: '/seller/listed-products'
        },
        {
            title: 'Orders',
            img: '../images/seller-dashboard/delivery-man.png',
            to: '/seller/orders'
        },
        {
            title: 'Reviews',
            img: '../images/seller-dashboard/rating.png',
            to: ''
        },
    ]


    return (
        <div className="bg-white flex flex-col p-7 sm:py-4 w-[70%] sm:w-full h-[100vh] border-r rounded-xl">
            <div className='flex justify-between items-center py-3'>
                <Link to={'/'} className='font-bold font-serif text-2xl sm:text-2xl text-[#402768]'>SwiftStore</Link>

                <button onClick={() => handleSidebarVisibility(false)} className="sm:hidden">
                    <FiPlus className='rotate-45 text-4xl' />
                </button>

            </div>


            <div className='text-slate-700 flex flex-col sm:text-xs md:text-base font-semibold sm:font-normal whitespace-nowrap mt-4'>
                {tabs.map((tab) => (
                    <Link to={tab.to} key={tab.title} onClick={() => setActiveTab(tab.title)} className={`flex items-center gap-3 py-[12px] px-3 pr-14 cursor-pointer  ${activeTab === tab.title ? 'sm:py-2 border rounded-xl bg-[#402768] text-white' : 'sm:py-2'} `}>
                        <img width='23' src={tab.img} alt="" />
                        <span>{tab.title}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SidebarSellerDashboard
