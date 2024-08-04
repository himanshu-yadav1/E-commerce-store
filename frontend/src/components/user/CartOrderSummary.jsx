import React from 'react'
import { IoClose } from "react-icons/io5";

function CartOrderSummary({ cartItems, prices, setOrderSummaryOnSmallScreenVisiblity }) {
    return (
        <div className="w-[85%] sm:w-auto flex flex-col gap-3 px-4 py-2 mb-24 sm:mb-0 bg-white border bottom-1 border-slate-300 rounded-xl lg:sticky lg:top-3">
            <div className='flex mb-6 sm:mb-2 pb-2 pt-1 sm:border-b items-center'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <span className='text-xl font-serif text-gray-800 leading-5 sm:leading-normal pt-4 sm:pt-0'>Order Summary</span>
                    <span className='text-gray-700 text-sm'>{cartItems.length} {cartItems.length > 1 ? 'items' : 'item'}</span>
                </div>

                <span onClick={() => setOrderSummaryOnSmallScreenVisiblity(false)} className='sm:hidden text-gray-500 text-2xl'><IoClose /></span>
            </div>

            <div className='flex flex-col gap-2 border-b pb-2 text-gray-700'>
                <div className='flex justify-between'>
                    <span>Original Price</span>
                    <span>₹ {prices.originalPrice}</span>
                </div>
                <div className='flex justify-between'>
                    <span>Discount</span>
                    <span>₹ {prices.discount}</span>
                </div>
            </div>

            <div className='flex flex-col gap-2 border-b pb-2 text-gray-700'>
                <div className='flex justify-between'>
                    <span>Subtotal</span>
                    <span>₹ {prices.subTotal}</span>
                </div>
                <div className='flex justify-between'>
                    <span>Delivery Charges</span>
                    <span>₹ {prices.deliveryCharges}</span>
                </div>
            </div>

            <div className='flex flex-col pb-2 font-bold text-lg'>
                <div className='flex justify-between'>
                    <span className="">Total</span>
                    <span className="">₹ {prices.total}</span>
                </div>
            </div>

            <button className="w-full py-2 bg-blue-500 text-white rounded-md mb-3">Checkout</button>
        </div>
    )
}

export default CartOrderSummary
