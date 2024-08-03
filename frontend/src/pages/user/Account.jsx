import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import HeaderBar from "../../components/user/HeaderBar"
import AccountItem from "../../components/user/AccountItem"
import { signOutSuccess } from "../../features/userSlice"

function Account() {
    const { currentUser } = useSelector((state) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if(!currentUser){
            navigate('/signin')
        }

    }, [])


    const handleSignOut = () => {

        setTimeout(() => {

            fetch('/api/v1/auth/signout')
            .then((resp) => {
                return resp.json()
            })
            .then((data) => {
                if(data.success === false){
                    console.log("Error occurred while signing out.")
                    return
                }

                dispatch(signOutSuccess())
                navigate('/')
            })
            .catch((error) => {
                window.alert("Error occurred while signing out.")
                console.log("Error occurred while signing out.", error)
            })
            
        }, 400);
    }


    return (
        <>
            <div className='sm:hidden'>
                <HeaderBar />
            </div>


            <div className="py-7 px-10 md:px-24">
                <h2 className="text-2xl text-gray-500 font-semibold font-serif">Your Account</h2>

                <div className="flex w-full flex-wrap flex-col sm:flex-row sm:justify-center gap-3 py-7">
                    <AccountItem 
                        imageSrc="images/account/box.png"
                        title="Your Orders"
                        description="See all your orders"
                        to="/"
                    />
                    
                    <AccountItem 
                        imageSrc="images/account/lock.png"
                        title="Login & Security"
                        description="Edit email, username, and password"
                        to="/"
                    />

                    <AccountItem 
                        imageSrc="images/account/shopping-cart.png"
                        title="Your Cart"
                        description="View and manage your cart items"
                        to="/"
                    />

                    <AccountItem 
                        imageSrc="images/account/wishlist.png"
                        title="Your Wishlist"
                        description="Browse your saved products"
                        to="/"
                    />

                    <AccountItem 
                        imageSrc="images/account/sell.png"
                        title="Sell on SwiftStore"
                        description="Start selling your products"
                        to="/seller/dashboard"
                    />

                    <AccountItem 
                        imageSrc="images/account/customer-service.png"
                        title="Contact Us"
                        description="Get help and support"
                        to="/contact-us"
                    />

                </div>

                <div onClick={handleSignOut} className="flex justify-center px-2 pt-5 sm:pt-3 pb-20 sm:pb-0">
                    <button className="font-bold cursor-pointer transition-all bg-red-400 text-white px-6 py-2 rounded-lg hover:bg-red-500 sm:active:bg-red-700 active:brightness-90 active:translate-y-[2px] shadow-lg active:shadow-none">
                        Sign Out
                    </button>
                </div>

            </div>

        </>
    )
}

export default Account
