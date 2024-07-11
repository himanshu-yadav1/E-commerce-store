import { Outlet, useNavigate } from "react-router-dom"
import SidebarSellerDashboard from "../components/SidebarSellerDashboard"
import { useEffect, useState } from "react"
import HeaderSellerDashboard from "../components/HeaderSellerDashboard"
import { useSelector } from "react-redux"
import BecomeSeller from "../pages/BecomeSeller"

function SellerDashboardLayout() {
    const navigate  = useNavigate()
    const [isSidebarVisible, setIsSidebarVisible] = useState(false)
    const { currentUser } = useSelector((state) => state.user)

    const handleSidebarVisibility = (value) => {
        setIsSidebarVisible(value)
    }

    useEffect(() => {
        if(!currentUser){
            navigate('/signin')
        }
    }, [])

    return (
        <>
            {
                currentUser && !currentUser.user.isSeller ?

                <BecomeSeller /> :

                <div className="sm:flex">
                    <div className={`z-50 fixed sm:relative flex h-[100vh] sm:h-auto w-[100vw] sm:w-auto bg-white bg-opacity-50 duration-500 transition-transform sm:transition-none ${isSidebarVisible ? '-translate-x-0' : '-translate-x-[100%] sm:-translate-x-0'}`}>
                        <SidebarSellerDashboard handleSidebarVisibility={handleSidebarVisibility}/>
                    </div>

                    <div className="sm:w-full">
                        <HeaderSellerDashboard handleSidebarVisibility={handleSidebarVisibility}/>

                        <Outlet />
                    </div>


                </div>
            }
        </>
    )
}

export default SellerDashboardLayout
