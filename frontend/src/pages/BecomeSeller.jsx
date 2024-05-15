import { useState } from "react"
import Header from "../components/Header"
import HeaderBar from "../components/HeaderBar"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "../features/userSlice"

function BecomeSeller() {

    const [storeName, setStoreName] = useState('')
    const { currentUser } = useSelector((state) => state.user)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleBecomeSeller = (e) => {
        e.preventDefault()

        fetch('/api/v1/user/registerAsSeller', {
            method: 'POST',
            headers: { 'Content-type': 'application/json'},
            body: JSON.stringify(
                { 
                    storeName,
                    userId: currentUser.user._id
                }
            )
        })
        .then((resp) => {
            return resp.json()
        })
        .then((data) => {
            if(data.success == false){
                console.log(data)
                return
            }

            dispatch(updateUser(data))
            navigate('/seller/dashboard')       
        })
        .catch((error) => {
            console.log(error)
        })

    }


    return (
        <div >
            <Header />
            <HeaderBar />

            <div className="p-6">
                <p className="text-center text-lg text-red-400">You are not registerd as seller</p>
            </div>

            <div className="flex gap-10 sm:gap-24 flex-col sm:flex-row items-center justify-center mx-5 p-6 pb-14 rounded-xl shadow-xl bg-gradient-to-br from-[#e2f9ed] to-[#1D7B65]">
                <img className='w-[40vw] sm:w-[25vw]' src="../images/seller/seller.png" alt="" />

                <form onSubmit={handleBecomeSeller} className="flex flex-col items-center gap-5">
                    {/* ------------------error message------------ */}
                    <input value={storeName} onChange={(e) => setStoreName(e.target.value)} className="text-lg p-2 rounded-lg border sm:w-80 focus:outline-none" type="text" placeholder="Enter your store name"/>
                    <button type="submit" className="border border-white text-white font-mono font-semibold text-lg px-4 py-2 sm:py-1 rounded-lg shadow-md shadow-white duration-150 hover:shadow-white hover:shadow-lg active:scale-95 active:shadow-white active:shadow-sm">Register</button>
                </form>
            </div>

            </div>
    )
}

export default BecomeSeller
