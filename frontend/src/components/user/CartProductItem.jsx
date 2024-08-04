import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { HiPlusSmall } from "react-icons/hi2";

function CartProductItem({ item, changeQuantity, removeItem }) {
    return (
        <>
            {/* cart item large screens */}
            <div className="hidden sm:flex flex-col sm:flex-row sm:items-center justify-between px-4 py-2 border bottom-1 border-slate-300 bg-white rounded-xl">
                <div className='flex w-[50%] items-center gap-4'>
                    <img src={item.image} className="w-16 h-16 object-cover" />
                    <div className="flex flex-col text-nowrap overflow-hidden">
                        <span className="text-lg truncate">{item.name}</span>
                        <span className="text-gray-500">{item.category}</span>
                    </div>
                </div>

                <div className='w-[45%] flex justify-between items-center mt-0'>
                    {item.offer ? (
                        <div className="flex items-center">
                            <span className="text-green-700 font-semibold text-lg">₹{item.discountedPrice}</span>
                            <span className="text-gray-400 line-through ml-2">₹{item.price}</span>
                        </div>
                    ) : (
                        <span className="text-green-700 font-semibold text-lg">₹{item.price}</span>
                    )}

                    <div className="flex items-center gap-3">
                        <span
                            onClick={() => changeQuantity(item.id, item.quantity - 1)}
                            className='flex justify-center items-center bg-gray-400 text-white h-[20px] w-[20px] rounded-full cursor-pointer hover:scale-105 active:scale-100'
                        >
                            <HiMiniMinusSmall />
                        </span>
                        <span className='text-xl'>{item.quantity}</span>
                        <span
                            onClick={() => changeQuantity(item.id, item.quantity + 1)}
                            className='flex justify-center items-center bg-green-700 text-white h-[20px] w-[20px] rounded-full cursor-pointer hover:scale-105 active:scale-100'
                        >
                            <HiPlusSmall />
                        </span>
                    </div>

                    <span onClick={() => removeItem(item.id)} className='text-lg text-red-500 cursor-pointer hover:scale-105'>
                        <RiDeleteBin6Line />
                    </span>
                </div>
            </div>

            {/* cart item small screens */}
            <div className="flex sm:hidden items-center gap-5 px-4 py-2 border bottom-1 border-slate-300 bg-white rounded-xl">
                <img src={item.image} className="w-16 h-16 object-cover" />

                <div className='w-full flex justify-between items-center'>
                    <div className='w-full'>
                        <div className='flex justify-between gap-4'>
                            <div className="flex flex-col text-nowrap overflow-hidden">
                                <span className="truncate">{item.name}</span>
                            </div>
                        </div>

                        <div className='flex items-center mt-2'>
                            {item.offer ? (
                                <div className="w-[55%] flex items-center">
                                    <span className="text-green-700 font-semibold text-lg">₹{item.discountedPrice}</span>
                                    <span className="text-gray-400 line-through ml-2">₹{item.price}</span>
                                </div>
                            ) : (
                                <span className="text-green-700 font-semibold text-lg">₹{item.price}</span>
                            )}

                            <div>
                                <select
                                    value={item.quantity}
                                    name=""
                                    id=""
                                    className='bg-transparent w-[60px] border border-slate-200 focus:outline-none rounded-lg p-1'
                                    onChange={(e) => changeQuantity(item.id, e.target.value)}
                                >
                                    <option value="0">Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <span onClick={() => removeItem(item.id)} className='mt-1 text-xl text-red-500 cursor-pointer hover:scale-105'>
                        <RiDeleteBin6Line />
                    </span>
                </div>
            </div>
        </>
    )
}

export default CartProductItem
