import { Outlet } from "react-router-dom"
import SidebarSellerDashboard from "../components/SidebarSellerDashboard"
import { useState } from "react"
import HeaderSellerDashboard from "../components/HeaderSellerDashboard"

function SellerDashboardLayout() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false)

    const handleSidebarVisibility = (value) => {
        setIsSidebarVisible(value)
    }

    return (
        <>
            <div className="sm:flex">
                <div className={`fixed sm:relative flex h-[100vh] sm:h-auto w-[100vw] sm:w-auto bg-white bg-opacity-50 duration-500 transition-transform sm:transition-none ${isSidebarVisible ? '-translate-x-0' : '-translate-x-[100%] sm:-translate-x-0'}`}>
                    <SidebarSellerDashboard handleSidebarVisibility={handleSidebarVisibility}/>
                </div>

                <div className="sm:w-full">
                    <HeaderSellerDashboard handleSidebarVisibility={handleSidebarVisibility}/>

                    <Outlet />
                </div>


            </div>
        </>
    )
}

export default SellerDashboardLayout
