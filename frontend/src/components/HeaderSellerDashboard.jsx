import { CiMenuBurger } from "react-icons/ci"
import { Link } from "react-router-dom"

function HeaderSellerDashboard({ handleSidebarVisibility }) {
    return (
        <header className="flex justify-between py-4 px-7">
            <div className="flex items-center gap-8">
                <div className="sm:hidden text-3xl active:scale-105">
                    <CiMenuBurger onClick={() => handleSidebarVisibility(true)}/>
                </div>

                <div>
                    <h2 className="pl-3 sm:pl-0 text-sm sm:text-xl font-mono sm:font-bold sm:font-serif text-slate-500 sm:text-slate-700 leading-3 sm:leading-7">Dashboard</h2>
                    <h2 className="sm:hidden text-3xl font-bold font-serif text-slate-700">iStore</h2>
                </div>
            </div>


            <div className="flex gap-5 items-center">
                <h2 className="hidden sm:inline text-xl font-semibold text-[#3f2766]">iStore</h2>
                <Link to={'/'} className="border border-black px-3 py-1 rounded-lg duration-200 hover:scale-105 hover:brightness-90">Home</Link>
            </div>
            
        </header>
    )
}

export default HeaderSellerDashboard
