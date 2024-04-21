import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

import { TiMinus, TiPlus } from 'react-icons/ti'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FiPlus } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../features/menuSlice'

function Menu() {

    const { isMenuVisible } = useSelector((state) => state.menu)
    const dispatch = useDispatch()

    const [hoveredLink, setHoveredLink] = useState('')
    const [menuVisibleOnSmallScreen, setMenuVisibleOnSmallScreen] = useState('')

    const handleMouseEnter = (link) => {
        setHoveredLink(link)
    }

    const handleMouseLeave = () => {
        setHoveredLink('')
    }

    const showMenuList = (itemsToShow) => {
        setMenuVisibleOnSmallScreen(itemsToShow)
    }

    const hideMenuList = () => {
        setMenuVisibleOnSmallScreen('')
    }

    
    return (
        <>
            <div className={` ${isMenuVisible ? 'flex' : 'hidden'} sm:flex fixed sm:relative flex justify-start h-[100vh] sm:h-auto w-[100vw] sm:w-auto bg-black bg-opacity-40 `}>
                <div className={`flex flex-col sm:flex-row sm:justify-center sm:h-auto gap-0 sm:gap-5 md:gap-10 px-5 sm:px-20 border sm:border-none h-[100vh] w-[78%] sm:w-full whitespace-nowrap text-xl sm:text-base duration-500 animate-in sm:animate-none slide-in-from-left-96 bg-white`}>
                    <div className='sm:hidden flex justify-between items-center mt-2 border-b py-3'>
                        <h2 className=' uppercase text-xl text-[#D65DB1]'>Menu</h2>

                        <button onClick={() => dispatch(toggleMenu())}>
                            <FiPlus className='rotate-45 text-3xl'/>
                        </button>
                    </div>

                    <div className='border-b sm:border-none py-[12px] sm:py-2 mt-2 sm:mt-0'>
                        <Link to={'/'} className='sm:hover:text-[#D65DB1] sm:active:scale-105 sm:uppercase text-lg sm:text-base font-semibold sm:font-normal'>Home</Link>
                    </div>

                    <div onMouseEnter={() => handleMouseEnter('electronics')} onMouseLeave={handleMouseLeave} className='border-b sm:border-none py-[12px] sm:py-2'>
                        <div className='flex justify-between items-center'>
                            <Link to={'/'} className='sm:hover:text-[#D65DB1] sm:active:scale-105 sm:uppercase text-lg sm:text-base font-semibold sm:font-normal'>Electronics</Link>
                            
                            {menuVisibleOnSmallScreen === 'electronics' 
                                ?
                                <button onClick={() => hideMenuList()} className={`mr-2 sm:hidden`}>
                                    <TiMinus />
                                </button>

                                :
                                <button onClick={() => showMenuList('electronics')} className={`mr-2 sm:hidden`}>
                                    <TiPlus />
                                </button>
                            }
                        </div>

                        {menuVisibleOnSmallScreen === 'electronics' &&
                            <div className='sm:hidden flex flex-col gap-1 mt-4 ml-4 duration-700 animate-in fade-in-0'>
                                <Link to={'/'} className='text-lg text-gray-500 duration-100 animate-in slide-in-from-top-40 fade-in-0'>Desktop</Link>
                                <Link to={'/'} className='text-lg text-gray-500 duration-100 animate-in slide-in-from-top-40 fade-in-0'>Laptop</Link>
                                <Link to={'/'} className='text-lg text-gray-500 duration-200 animate-in slide-in-from-top-40 fade-in-0'>Smart TV</Link>
                                <Link to={'/'} className='text-lg text-gray-500 duration-200 animate-in slide-in-from-top-40 fade-in-0'>Camera</Link>
                                <Link to={'/'} className='text-lg text-gray-500 duration-300 animate-in slide-in-from-top-40 fade-in-0'>Tablet</Link>
                                <Link to={'/'} className='text-lg text-gray-500 duration-500 animate-in slide-in-from-top-40 fade-in-0'>Printer</Link>
                            </div>
                        }
                        
                    </div>

                    <div onMouseEnter={() => handleMouseEnter('men')} onMouseLeave={handleMouseLeave} className='border-b sm:border-none py-[12px] sm:py-2'>
                        <div className='flex justify-between items-center'>
                            <Link to={'/'} className='sm:hover:text-[#D65DB1] sm:active:scale-105 sm:uppercase text-lg sm:text-base font-semibold sm:font-normal'>Men's</Link>
                            
                            {menuVisibleOnSmallScreen === 'men' 
                                ?
                                <button onClick={() => hideMenuList()} className={`mr-2 sm:hidden`}>
                                    <TiMinus />
                                </button>

                                :
                                <button onClick={() => showMenuList('men')} className={`mr-2 sm:hidden`}>
                                    <TiPlus />
                                </button>
                            }
                        </div>

                        {menuVisibleOnSmallScreen === 'men' &&
                            <div className='sm:hidden flex flex-col gap-1 mt-4 ml-4 duration-700 animate-in fade-in-0'>
                                <Link to={'/'} className='text-lg text-gray-500 duration-100 animate-in slide-in-from-top-40 fade-in-0'>Formal</Link>
                                <Link to={'/'} className='text-lg text-gray-500 duration-100 animate-in slide-in-from-top-40 fade-in-0'>Casual</Link>
                                <Link to={'/'} className='text-lg text-gray-500 duration-200 animate-in slide-in-from-top-40 fade-in-0'>Shirt</Link>
                                <Link to={'/'} className='text-lg text-gray-500 duration-200 animate-in slide-in-from-top-40 fade-in-0'>Short & Jeans</Link>
                                <Link to={'/'} className='text-lg text-gray-500 duration-300 animate-in slide-in-from-top-40 fade-in-0'>Shoes</Link>
                                <Link to={'/'} className='text-lg text-gray-500 duration-500 animate-in slide-in-from-top-40 fade-in-0'>Glasses</Link>
                            </div>
                        }

                    </div>

                    <div onMouseEnter={() => handleMouseEnter('women')} onMouseLeave={handleMouseLeave} className='border-b sm:border-none py-[12px] sm:py-2'>
                        <div className='flex justify-between items-center'>
                            <Link to={'/'} className='sm:hover:text-[#D65DB1] sm:active:scale-105 sm:uppercase text-lg sm:text-base font-semibold sm:font-normal'>Women's</Link>
                            
                            {menuVisibleOnSmallScreen === 'women' 
                                ?
                                <button onClick={() => hideMenuList()} className={`mr-2 sm:hidden`}>
                                    <TiMinus />
                                </button>

                                :
                                <button onClick={() => showMenuList('women')} className={`mr-2 sm:hidden`}>
                                    <TiPlus />
                                </button>
                            }
                        </div>

                        {menuVisibleOnSmallScreen === 'women' &&
                            <div className='sm:hidden flex flex-col gap-1 mt-4 ml-4 duration-700 animate-in fade-in-0'>
                                <Link to={'/'} className='text-lg text-gray-500 duration-100 animate-in slide-in-from-top-40 fade-in-0'>Formal</Link>
                                <Link to={'/'} className='text-lg text-gray-500 duration-100 animate-in slide-in-from-top-40 fade-in-0'>Casual</Link>
                                <Link to={'/'} className='text-lg text-gray-500 duration-200 animate-in slide-in-from-top-40 fade-in-0'>Dress & Frock</Link>
                                <Link to={'/'} className='text-lg text-gray-500 duration-300 animate-in slide-in-from-top-40 fade-in-0'>Makeup Kit</Link>
                                <Link to={'/'} className='text-lg text-gray-500 duration-500 animate-in slide-in-from-top-40 fade-in-0'>Glasses</Link>
                            </div>
                        }

                    </div>

                    <div onMouseEnter={() => handleMouseEnter('fitness')} onMouseLeave={handleMouseLeave} className='border-b sm:border-none py-[12px] sm:py-2'>
                        <div className='flex justify-between items-center'>
                            <Link to={'/'} className='sm:hover:text-[#D65DB1] sm:active:scale-105 sm:uppercase text-lg sm:text-base font-semibold sm:font-normal'>Fitness</Link>
                            
                            {menuVisibleOnSmallScreen === 'fitness' 
                                ?
                                <button onClick={() => hideMenuList()} className={`mr-2 sm:hidden`}>
                                    <TiMinus />
                                </button>

                                :
                                <button onClick={() => showMenuList('fitness')} className={`mr-2 sm:hidden`}>
                                    <TiPlus />
                                </button>
                            }
                        </div>   

                        {menuVisibleOnSmallScreen === 'fitness' &&
                            <div className='sm:hidden flex flex-col gap-1 mt-4 ml-4 duration-700 animate-in fade-in-0'>
                                <Link to={'/'} className='text-lg text-gray-500 duration-100 animate-in slide-in-from-top-40 fade-in-0'>Dumbbells</Link>
                                <Link to={'/'} className='text-lg text-gray-500 duration-100 animate-in slide-in-from-top-40 fade-in-0'>Resistance Bands</Link>
                                <Link to={'/'} className='text-lg text-gray-500 duration-200 animate-in slide-in-from-top-40 fade-in-0'>Yoga Mats</Link>
                                <Link to={'/'} className='text-lg text-gray-500 duration-300 animate-in slide-in-from-top-40 fade-in-0'>Makeup Kit</Link>
                                <Link to={'/'} className='text-lg text-gray-500 duration-500 animate-in slide-in-from-top-40 fade-in-0'>Home Gym Systems</Link>
                            </div>
                        }

                    </div>
                    
                    <div className='border-b sm:border-none py-[12px] sm:py-2'>
                        <Link to={'/'} className='sm:hover:text-[#D65DB1] sm:active:scale-105 sm:uppercase text-lg sm:text-base font-semibold sm:font-normal'>Best sellers</Link>       
                    </div>

                    <div className='border-b sm:border-none py-[12px] sm:py-2'>
                        <Link to={'/'} className='sm:hover:text-[#D65DB1] sm:active:scale-105 sm:uppercase text-lg sm:text-base font-semibold sm:font-normal'>Hot Offers</Link>
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
            </div>


            {hoveredLink === 'electronics' &&
                <div onMouseEnter={() => handleMouseEnter('electronics')} onMouseLeave={handleMouseLeave} className='hidden sm:flex absolute left-[23vw] py-3 px-5 border border-b-2 rounded-xl shadow-md border-gray-300 duration-150 animate-in slide-in-from-bottom-8 bg-white'>
                    <div className='flex font-thin gap-8'>
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

            {hoveredLink === 'men' &&
                <div onMouseEnter={() => handleMouseEnter('men')} onMouseLeave={handleMouseLeave} className='hidden sm:flex absolute left-[35vw] py-3 px-5 border border-b-2 rounded-xl shadow-md border-gray-300 duration-150 animate-in slide-in-from-bottom-8 bg-white'>
                    <div className='flex font-thin gap-8'>
                        <div className='flex flex-col gap-1'>
                            <Link to={'/'} className='hover:text-[#D65DB1]'>Formal</Link>
                            <Link to={'/'} className='hover:text-[#D65DB1]'>Casual</Link>
                            <Link to={'/'} className='hover:text-[#D65DB1]'>Shirt</Link>
                            <Link to={'/'} className='hover:text-[#D65DB1]'>Short & Jeans</Link>
                            <Link to={'/'} className='hover:text-[#D65DB1]'>Shoes</Link>
                            <Link to={'/'} className='hover:text-[#D65DB1]'>Glasses</Link>
                        </div>
                    </div>
                </div>
            }

            {hoveredLink === 'women' &&
                <div onMouseEnter={() => handleMouseEnter('women')} onMouseLeave={handleMouseLeave} className='hidden sm:flex absolute left-[43vw] py-3 px-5 border border-b-2 rounded-xl shadow-md border-gray-300 duration-150 animate-in slide-in-from-bottom-8 bg-white'>
                    <div className='flex font-thin gap-8'>
                        <div className='flex flex-col gap-1'>
                            <Link to={'/'} className='hover:text-[#D65DB1]'>Formal</Link>
                            <Link to={'/'} className='hover:text-[#D65DB1]'>Casual</Link>
                            <Link to={'/'} className='hover:text-[#D65DB1]'>Dress & Frock</Link>
                            <Link to={'/'} className='hover:text-[#D65DB1]'>Makeup Kit</Link>
                            <Link to={'/'} className='hover:text-[#D65DB1]'>Glasses</Link>
                        </div>
                    </div>
                </div>
            }

            {hoveredLink === 'fitness' &&
                <div onMouseEnter={() => handleMouseEnter('fitness')} onMouseLeave={handleMouseLeave} className='hidden sm:flex absolute left-[52vw] py-3 px-5 border border-b-2 rounded-xl shadow-md border-gray-300 duration-150 animate-in slide-in-from-bottom-8 bg-white'>
                    <div className='flex font-thin gap-8'>
                        <div className='flex flex-col gap-1'>
                            <Link to={'/'} className='hover:text-[#D65DB1]'>Dumbbells</Link>
                            <Link to={'/'} className='hover:text-[#D65DB1]'>Resistance Bands</Link>
                            <Link to={'/'} className='hover:text-[#D65DB1]'>Yoga Mats</Link>
                            <Link to={'/'} className='hover:text-[#D65DB1]'>Home Gym Systems</Link>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Menu
