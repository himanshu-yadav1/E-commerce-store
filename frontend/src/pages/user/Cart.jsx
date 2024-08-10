import React, { useEffect, useState } from 'react'
import HeaderBar from '../../components/user/HeaderBar';
import { GrFormNextLink } from "react-icons/gr";
import CartProductItem from '../../components/user/CartProductItem';
import CartOrderSummary from '../../components/user/CartOrderSummary';

function Cart() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-html/assets/images/product-image/96_1.jpg',
            name: 'Running & Trekking Shoes',
            category: 'Footwear',
            price: 2200,
            discountedPrice: 1590.00,
            offer: true,
            quantity: 1
        },
        {
            id: 2,
            image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-html/assets/images/product-image/93_1.jpg',
            name: 'Mens Winter Leathers Jacket',
            category: 'Jacket',
            price: 1200.00,
            discountedPrice: 990.00,
            offer: true,
            quantity: 1
        },
        {
            id: 3,
            image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-html/assets/images/product-image/6_2.jpg',
            name: 'Round Neck T-Shirt',
            category: 'T-Shirt',
            price: 990.00,
            discountedPrice: 850.00,
            offer: true,
            quantity: 1
        }
    ])

    const [prices, setPrices] = useState({
        originalPrice: 0,
        discount: 0,
        subTotal: 0,
        deliveryCharges: 0,
        total: 0
    })

    const [orderSummaryOnSmallScreenVisiblity, setOrderSummaryOnSmallScreenVisiblity] = useState(false)

    const changeQuantity = (id, quantity) => {
        if (quantity < 1) return
        setCartItems(cartItems.map((item) => item.id === id ? { ...item, quantity } : item))
    }

    const removeItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id))
    }


    useEffect(() => {
        const originalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
        const subTotal = cartItems.reduce((acc, item) => acc + item.discountedPrice * item.quantity, 0)
        const discount = originalPrice - subTotal
        const deliveryCharges = subTotal > 1000 ? 0 : 50
        const total = subTotal + deliveryCharges

        setPrices({ originalPrice, discount, subTotal, deliveryCharges, total })
    }, [cartItems])



    return (
        <>
            <div>
                <HeaderBar />
            </div>

            {cartItems.length > 0 ? (
                <div className="py-10 px-5 mb-20 sm:mb-0">
                    <div className='flex justify-between items-center'>
                        <h1 className="text-xl text-gray-500 font-semibold font-serif">Shopping Cart</h1>
                        <span onClick={() => setOrderSummaryOnSmallScreenVisiblity(true)} className="flex sm:hidden items-center text-blue-500 font-semibold">
                            Proceed
                            <span className='text-lg'>
                                <GrFormNextLink />
                            </span>
                        </span>
                    </div>

                    <div className="flex flex-col lg:items-start lg:flex-row gap-8 mt-5">
                        <div className="lg:w-[66%] flex flex-col gap-3">
                            {cartItems.map((item) => (
                                <div key={item.id}>
                                    <CartProductItem item={item} changeQuantity={changeQuantity} removeItem={removeItem} />
                                </div>
                            ))}
                        </div>

                        <div className="hidden sm:block lg:w-[32%]">
                            <CartOrderSummary cartItems={cartItems} prices={prices} />
                        </div>

                        {orderSummaryOnSmallScreenVisiblity &&
                            <div className='z-50 sm:hidden fixed top-0 left-0 w-[100%] h-[100%] bg-black bg-opacity-60 flex justify-center items-center'>
                                <CartOrderSummary cartItems={cartItems} prices={prices} setOrderSummaryOnSmallScreenVisiblity={setOrderSummaryOnSmallScreenVisiblity} />
                            </div>
                        }

                        <div className='sm:hidden flex justify-end gap-9 pb-16 px-5 font-bold text-lg text-slate-700'>
                            <span className="">Total</span>
                            <span className="">₹ {prices.total}</span>
                        </div>
                    </div>
                </div>
            ) :
                (
                    <div className="flex mt-40 justify-center">
                        <h1 className="text-2xl font-bold text-slate-500">Cart is empty</h1>
                    </div>
                )
            }
        </>
    );
}

export default Cart


