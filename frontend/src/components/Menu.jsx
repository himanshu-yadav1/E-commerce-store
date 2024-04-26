import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FiPlus } from 'react-icons/fi'

function Menu({ handleMenuPanelVisibility }) {

    const [isCategoriesHovered, setIsCategoriesHovered] = useState(false)
    
    return (
        <>
            <div className='flex flex-col sm:flex-row sm:justify-center h-full sm:h-auto w-[78%] sm:w-full gap-0 sm:gap-5 md:gap-10 p-7 sm:p-0 sm:px-20 bg-white rounded-xl sm:rounded-none'>
                <div className='sm:hidden flex justify-between items-center border-b py-3 pb-5'>
                    <h2 className='uppercase text-xl text-[#D65DB1]'>Menu</h2>

                    <button onClick={() => handleMenuPanelVisibility(false)}>
                        <FiPlus className='rotate-45 text-4xl'/>
                    </button>

                </div>


                <div className='flex flex-col sm:flex-row sm:gap-4 md:gap-10 sm:uppercase sm:text-xs md:text-base font-semibold sm:font-normal whitespace-nowrap'>

                    <div className='hidden sm:flex items-center gap-3 border-b sm:border-none py-[12px] sm:py-2'>
                        <Link onMouseEnter={() => setIsCategoriesHovered(true)} onMouseLeave={() => setIsCategoriesHovered(false)} className='sm:hover:text-[#D65DB1] sm:active:scale-105'>Categories</Link>
                    </div>

                    <div className='flex items-center gap-3 border-b sm:border-none py-[12px] sm:py-2'>
                        <img width='23' className='sm:hidden' src="images/menu/sell.png" alt="" />
                        <Link className='sm:hover:text-[#D65DB1] sm:active:scale-105'>Sell</Link>
                    </div>

                    <div className='flex items-center gap-3 border-b sm:border-none py-[12px] sm:py-2'>
                        <img width='23' className='sm:hidden' src="images/menu/favorites.png" alt="" />
                        <Link className='sm:hover:text-[#D65DB1] sm:active:scale-105'>Best Sellers</Link>
                    </div>

                    <div className='flex items-center gap-3 border-b sm:border-none py-[12px] sm:py-2'>
                        <img width='23' className='sm:hidden' src="images/menu/new.png" alt="" />
                        <Link className='sm:hover:text-[#D65DB1] sm:active:scale-105'>New Arrivals</Link>
                    </div>

                    <div className='flex items-center gap-3 border-b sm:border-none py-[12px] sm:py-2'>
                        <img width='23' className='sm:hidden' src="images/menu/fire.png" alt="" />
                        <Link className='sm:hover:text-[#D65DB1] sm:active:scale-105'>Hot Offers</Link>
                    </div>

                    <div className='flex items-center gap-3 border-b sm:border-none py-[12px] sm:py-2'>
                        <img width='23' className='sm:hidden' src="images/menu/list.png" alt="" />
                        <Link className='sm:hover:text-[#D65DB1] sm:active:scale-105'>About Us</Link>
                    </div>

                    <div className='flex items-center gap-3 border-b sm:border-none py-[12px] sm:py-2'>
                        <img width='23' className='sm:hidden' src="images/menu/customer-service.png" alt="" />
                        <Link className='sm:hover:text-[#D65DB1] sm:active:scale-105'>Help & Support</Link>
                    </div>
                </div>


                <div className='sm:hidden mt-10 flex justify-center gap-6'>
                        <Link to={'https://facebook.com'} className='bg-gray-200 p-2 rounded-lg'>
                            <FaFacebook />
                        </Link>

                        <Link to={'https://twitter.com'} className='bg-gray-200 p-2 rounded-lg'>
                            <FaTwitter />
                        </Link>

                        <Link to={'https://instagram.com'} className='bg-gray-200 p-2 rounded-lg'>
                            <FaInstagram />
                        </Link>
                </div>
                
            </div>


            {isCategoriesHovered &&
                <div onMouseEnter={() => setIsCategoriesHovered(true)} onMouseLeave={() => setIsCategoriesHovered(false)} className='hidden sm:flex absolute left-[8vw] py-3 px-5 border border-b-2 rounded-xl shadow-md border-gray-300 duration-150 animate-in slide-in-from-bottom-8 bg-white'>
                    <div className='flex font-thin gap-8 text-gray-600'>
                        <div className='flex flex-col gap-1'>
                            <Link to={'/'} className='hover:text-[#D65DB1]'>Smartphone</Link>
                            <Link to={'/'} className='hover:text-[#D65DB1]'>Desktop</Link>
                            <Link to={'/'} className='hover:text-[#D65DB1]'>Laptop</Link>
                            <Link to={'/'} className='hover:text-[#D65DB1]'>Smart TV</Link>
                            <Link to={'/'} className='hover:text-[#D65DB1]'>Tablet</Link>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <Link to={'/'} className='hover:text-[#D65DB1]'>Printer</Link>
                            <Link to={'/'} className='hover:text-[#D65DB1]'>Headphone</Link>
                            <Link to={'/'} className='hover:text-[#D65DB1]'>Camera</Link>
                            <Link to={'/'} className='hover:text-[#D65DB1]'>Keyboard</Link>
                            <Link to={'/'} className='hover:text-[#D65DB1]'>Mouse</Link>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Menu
