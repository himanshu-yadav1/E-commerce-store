import { useState } from "react"
import Header from "../../components/user/Header"
import HeaderBar from "../../components/user/HeaderBar"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "../../features/userSlice"

function BecomeSeller() {
    const [storeName, setStoreName] = useState('')
    const { currentUser } = useSelector((state) => state.user)

    const [error, setError] = useState(null)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleBecomeSeller = (e) => {
        e.preventDefault()

        fetch('/api/v1/user/registerAsSeller', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
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
                if (data.success == false) {
                    setError(data.message)
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


            <div className="py-mainPaddingY px-mainPaddingX min-h-screen flex items-start justify-center">
                <div className="bg-cardBg py-cardPaddingY px-cardPaddingX shadow-cardShadow border-cardBorderTop rounded-cardBorderRadius p-6 w-full max-w-md mt-4 sm:mt-1">
                    <h2 className="text-center text-2xl font-semibold">Register Your Store</h2>

                    <p className="text-center text-sm text-red-400">You are not registerd as seller</p>

                    <form onSubmit={handleBecomeSeller}>
                        <div className="mt-4">
                            <label className="block text-gray-700 mb-1">Store Name</label>
                            <input
                                type="text"
                                name="storeName"
                                value={storeName}
                                onChange={(e) => setStoreName(e.target.value)}
                                className="w-full px-[13px] py-[6px] border border-gray-300 rounded-md focus:outline-none"
                                required
                            />
                        </div>

                        <p className="text-center text-red-500 mt-7">{error}</p>

                        <div className="flex justify-center mt-2">
                            <button
                                type="submit"
                                className="uppercase cursor-pointer duration-75 transition-all text-white px-[13px] py-[6px] rounded-md border border-[#ed957f] bg-[#ed957f] hover:bg-[#ec7558] active:brightness-90 focus:outline-none"
                            >
                                Register Store
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default BecomeSeller
