import { Outlet } from "react-router-dom"
import Header from "../components/user/Header"

function MainLayout() {
    return (
        <div className="select-none">
            <Header />

            <Outlet />
        </div>
    )
}

export default MainLayout
