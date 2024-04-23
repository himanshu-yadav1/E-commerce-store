import { CiGrid41, CiHome, CiMenuBurger, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../features/menuSlice";
import { toggleCategoryPanelVisibility } from "../features/categorySlice";

function Header() {

    const { currentUser } = useSelector((state) => state.user)

    const dispatch = useDispatch()

    return (
        <header className="flex justify-center sm:justify-between">
            <div className='fixed sm:relative bottom-8 sm:bottom-0 rounded-full sm:rounded-none w-[85%] sm:w-full flex items-center justify-between border sm:shadow-sm py-3 px-6 bg-[#f9f7f4]'>
                <div className="hidden sm:flex">
                    <Link to={'/'} className="text-2xl font-bold font-serif text-[#402768]">SwiftStore</Link>
                </div>

                <form className="hidden sm:flex border-2 bg-white border-gray-300 p-2 rounded-lg items-center">
                    <input type="text" placeholder='search' className='text-[#222E50] w-[40vw]  bg-transparent focus:outline-none'/>
                    <button>
                        <CiSearch className='text-[#222E50] scale-125'/>
                    </button>
                </form>

                <div className="w-full sm:w-[20%] flex justify-between sm:justify-end sm:gap-10 text-3xl text-[#845EC2]">  
                    <div className="order-1 hover:text-[#3f2766] sm:hidden hover:scale-105 cursor-pointer">
                        <CiMenuBurger onClick={() => dispatch(toggleMenu())} />
                    </div>                    

                    {currentUser &&
                        (
                            <Link to={'/'} className="order-2 sm:order-2 hover:text-[#3f2766] hover:scale-105">
                                <CiShoppingCart />
                            </Link>
                            
                        )                    
                    }

                    <Link to={'/'} className="order-3 sm:order-1 hover:text-[#3f2766] hover:scale-105">
                        <CiHome />
                    </Link>

                    <Link to={currentUser ? '/' : '/signin'} className="order-4 sm:order-3 hover:text-[#3f2766] hover:scale-105">
                        <CiUser />
                    </Link>

                    <div className="order-5 hover:text-[#3f2766] sm:hidden hover:scale-105 cursor-pointer">
                        <CiGrid41 onClick={() => dispatch(toggleCategoryPanelVisibility())}/>
                    </div>
                    
                </div>
            </div>
        </header>
    )
}

export default Header
