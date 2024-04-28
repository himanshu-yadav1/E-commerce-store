import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function SellerDashboard() {
    const { currentUser } = useSelector((state) => state.user)
    const navigate = useNavigate()

    useEffect(() =>{
        if(!currentUser){
            navigate('/signin')
        }

    }, [])
    

    return (
        <div>
            this is seller dashboard
        </div>
    )
}

export default SellerDashboard
