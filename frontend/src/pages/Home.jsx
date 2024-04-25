import React from 'react'
import Menu from '../components/Menu'
import Category from '../components/Category'
import { useSelector } from 'react-redux'
import Hero_Section from '../components/Hero_Section'
import { CiSearch } from 'react-icons/ci'

function Home() {

    const { isCategoryPanelVisible } = useSelector((state) => state.category)
    const { isMenuVisible } = useSelector((state) => state.menu)

    return (
        <div>
            <div className={`fixed sm:relative flex h-[100vh] sm:h-auto w-[100vw] sm:w-auto bg-black sm:bg-white bg-opacity-40 sm:bg-opacity-100 duration-500 transition-transform sm:transition-none ${isMenuVisible ? '-translate-x-0' : '-translate-x-[100%]'} sm:translate-x-0`}>
                <Menu/>
            </div>

            
            <div className={`sm:hidden fixed flex justify-end h-[100vh] w-[100vw] bg-black bg-opacity-40 duration-500 transition-transform ${isCategoryPanelVisible ? '-translate-x-0' : '-translate-x-[-100%]'}`}>
                <Category />
            </div>


            <div className='sm:hidden pt-7'>
                <h1 className="text-center text-3xl font-extrabold text-[#1d3f35]">SwiftStore</h1>
                
                <form className="flex justify-between gap-2 mx-5 mt-5 p-2 border border-gray-300 rounded-lg">
                    <input type="text" placeholder='Search for products...' className='w-full text-[#222E50] focus:outline-none'/>
                    
                    <button>
                        <CiSearch className='w-10 text-[#222E50] size-6'/>
                    </button>
                </form>
            </div>


            <div className='p-5 sm:pt-0'>
                <Hero_Section />
            </div>

        </div>
    )
}

export default Home
