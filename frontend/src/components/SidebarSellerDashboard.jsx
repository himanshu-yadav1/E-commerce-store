import { FiPlus } from "react-icons/fi"
import { Link } from "react-router-dom"

function SidebarSellerDashboard({ handleSidebarVisibility }) {
    return (
        <div className="bg-white flex flex-col p-7 sm:py-4 w-[70%] sm:w-full h-[100vh] border-r rounded-xl">
            <div className='flex justify-between items-center py-3'>
                <Link to={'/'} className='font-bold font-serif text-2xl sm:text-2xl text-[#402768]'>SwiftStore</Link>

                <button onClick={() => handleSidebarVisibility(false)} className="sm:hidden">
                    <FiPlus className='rotate-45 text-4xl'/>
                </button>

            </div>


            <div className='text-slate-700 flex flex-col sm:text-xs md:text-base font-semibold sm:font-normal whitespace-nowrap mt-4'>

                <div className='flex items-center gap-3 py-[12px] sm:py-3 px-5 pr-20 cursor-pointer border rounded-xl bg-blue-700 text-white'>
                    <img width='23' src="../images/seller-dashboard/pie-chart.png" alt="" />
                    <Link to={'/seller/dashboard'}>Dashboard</Link>
                </div>

                <div className='flex items-center gap-3 py-[12px] sm:py-2 px-5 pr-20 cursor-pointer'>
                    <img width='23' src="../images/seller-dashboard/products.png" alt="" />
                    <Link>Products</Link>
                </div>

                <div className='flex items-center gap-3 py-[12px] sm:py-2 px-5 pr-20 cursor-pointer'>
                    <img width='23' src="../images/seller-dashboard/delivery-man.png" alt="" />
                    <Link>Orders</Link>
                </div>

                <div className='flex items-center gap-3 py-[12px] sm:py-2 px-5 pr-20 cursor-pointer'>
                    <img width='23' src="../images/seller-dashboard/rating.png" alt="" />
                    <Link>Reviews</Link>
                </div>
            </div>
        </div>
    )
}

export default SidebarSellerDashboard
