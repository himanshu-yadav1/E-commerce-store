import { CiGrid41, CiHome, CiMenuBurger, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Category from "./Category";
import Menu from "../user/Menu";
import { useState } from "react";

function Header() {

    const { currentUser } = useSelector((state) => state.user)

    const [isCategoryPanelVisible, setIsCategoryPanelVisible] = useState(false)
    const [isMenuPanelVisible, setIsMenuPanelVisible] = useState(false)

    const handleCategoryPanelVisibility = (value) => {
        setIsCategoryPanelVisible(value)
    }

    const handleMenuPanelVisibility = () => {
        setIsMenuPanelVisible((prev) => !prev)
    }

    return (
        <>
            <header className="z-10 relative flex justify-center sm:justify-between">
                <div className='fixed sm:relative bottom-8 sm:bottom-0 rounded-full sm:rounded-none w-[85%] sm:w-full flex items-center justify-between shadow-2xl sm:shadow-sm py-3 px-6 border sm:border-none bg-white'>
                    <div className="hidden sm:flex">
                        <Link to={'/'} className="text-2xl font-bold font-serif text-[#402768]">SwiftStore</Link>
                    </div>

                    <form className="hidden sm:flex border bg-white border-gray-400 p-2 rounded-xl items-center">
                        <input type="text" placeholder='search' className='text-[#222E50] w-[40vw]  bg-transparent focus:outline-none'/>
                        <button>
                            <CiSearch className='text-[#222E50] scale-125'/>
                        </button>
                    </form>

                    <div className="w-full sm:w-[20%] flex justify-between sm:justify-end sm:gap-10 text-3xl text-[#845EC2]">  
                        <div className="order-1 hover:text-[#3f2766] sm:hidden hover:scale-105 cursor-pointer">
                            <CiMenuBurger onClick={() => handleMenuPanelVisibility(true)} />
                        </div>                    

                        {currentUser &&
                            (
                                <Link to={'/cart'} className="order-2 sm:order-2 hover:text-[#3f2766] hover:scale-105">
                                    <CiShoppingCart />
                                </Link>
                                
                            )                    
                        }

                        <Link to={'/'} className="order-3 sm:order-1 hover:text-[#3f2766] hover:scale-105">
                            <CiHome />
                        </Link>

                        <Link to={currentUser ? '/account' : '/signin'} className="order-4 sm:order-3 hover:text-[#3f2766] hover:scale-105">
                            <CiUser />
                        </Link>

                        <div className="order-5 hover:text-[#3f2766] sm:hidden hover:scale-105 cursor-pointer">
                            <CiGrid41 onClick={() => handleCategoryPanelVisibility(true)}/>
                        </div>
                        
                    </div>
                </div>
            </header>

            
            <div className="sm:hidden ">
                <div className={`z-50 fixed flex h-[100vh] w-[100vw] bg-black bg-opacity-40 duration-500 transition-transform ${isMenuPanelVisible ? '-translate-x-0' : '-translate-x-[100%]'}`}>
                    <Menu handleMenuPanelVisibility={handleMenuPanelVisibility} />
                </div>

                
                <div className={`z-50 fixed flex justify-end h-[100vh] w-[100vw] bg-black bg-opacity-40 duration-500 transition-transform ${isCategoryPanelVisible ? '-translate-x-0' : '-translate-x-[-100%]'}`}>
                    <Category handleCategoryPanelVisibility={handleCategoryPanelVisibility}/>
                </div>
            </div>
        </>
    )
}

export default Header
