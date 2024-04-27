import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import HeaderBar from "../components/HeaderBar"
import AccountItem from "../components/AccountItem"

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
                        to="/"
                    />

                    <AccountItem 
                        imageSrc="images/account/customer-service.png"
                        title="Contact Us"
                        description="Get help and support"
                        to="/"
                    />

                </div>

            </div>

        </>
    )
}

export default Account
