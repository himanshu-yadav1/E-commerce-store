import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import HeaderBar from "../components/HeaderBar"

function Account() {
    const { currentUser } = useSelector((state) => state.user)
    const navigate = useNavigate()

    useEffect(() => {
        if(!currentUser){
            navigate('/signin')
        }

    }, [])

    return (
        <>
            <div className='sm:hidden'>
                <HeaderBar />
            </div>
        </>
    )
}

export default Account
