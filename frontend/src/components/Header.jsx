import { CiGrid41, CiHome, CiMenuBurger, CiShoppingCart, CiUser } from "react-icons/ci"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {

    const { currentUser } = useSelector((state) => state.user)

    return (
        <header className="flex justify-center">
            <div className='fixed sm:relative bottom-8 sm:bottom-0 rounded-full sm:rounded-none w-[85%] sm:w-full flex items-center justify-between border sm:shadow-sm py-3 px-6 bg-[#f9f7f4]'>
                <div className="hidden sm:flex">
                    <Link to={'/'} className="text-xl font-bold font-serif text-[#402768]">SwiftStore</Link>
                </div>

                <div className="w-full flex justify-between sm:justify-end sm:gap-10 text-3xl text-[#845EC2]">  
                    <Link to={'/'} className="order-1 hover:text-[#3f2766] sm:hidden">
                        <CiMenuBurger />
                    </Link>                    

                    {currentUser &&
                        (
                            <Link to={'/'} className="order-2 sm:order-2 hover:text-[#3f2766]">
                                <CiShoppingCart />
                            </Link>
                            
                        )                    
                    }

                    <Link to={'/'} className="order-3 sm:order-1 hover:text-[#3f2766]">
                        <CiHome />
                    </Link>

                    <Link to={currentUser ? '/  ' : '/signin'} className="order-4 sm:order-3 hover:text-[#3f2766] ">
                        <CiUser />
                    </Link>

                    <Link to={'/'} className="order-5 hover:text-[#3f2766] sm:hidden">
                        <CiGrid41 />
                    </Link>
                    
                </div>
            </div>
        </header>
    )
}

export default Header
