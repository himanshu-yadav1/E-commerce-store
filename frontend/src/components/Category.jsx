import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleCategoryPanelVisibility } from '../features/categorySlice'

import { FiMinus, FiPlus } from 'react-icons/fi'
import { TiMinus, TiPlus } from 'react-icons/ti'

function Category() {

    const dispatch = useDispatch()


    const [expandedCategory, setexpandedCategory] = useState('')

    const updateExpandedCategory = (category) => {
        setexpandedCategory(category)
    }

    return (
        <>
            <div className={`flex flex-col p-7 sm:p-5 h-full w-[78%] sm:w-full sm:border bg-white rounded-xl`}>
                <div className='flex justify-between items-center border-b sm:border-none py-3 sm:py-0 pb-5 sm:pb-3'>
                    <h2 className='uppercase text-xl sm:text-lg sm:font-semibold text-[#D65DB1]'>Category</h2>

                    <button onClick={() => dispatch(toggleCategoryPanelVisibility())} className='sm:hidden'>
                        <FiPlus className='rotate-45 text-4xl'/>
                    </button>

                </div>


                <div className='border-b sm:border-none py-[12px] sm:py-[8px]'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-3'>
                            <img width='23' src="images/category/tshirt.png" alt="" />
                            <Link to={'/'} className='font-semibold sm:font-normal'>Clothes</Link>
                        </div>
                        
                        {expandedCategory === 'clothes' 
                            ?
                            <button onClick={() => updateExpandedCategory('')} className={`mr-2`}>
                                <TiMinus className='sm:hidden'/>
                                <FiMinus className='hidden sm:flex'/>
                            </button>

                            :
                            <button onClick={() => updateExpandedCategory('clothes')} className={`mr-2`}>
                                <TiPlus className='sm:hidden'/>
                                <FiPlus className='hidden sm:flex'/>
                            </button>
                        }
                    </div>

                    {expandedCategory === 'clothes' &&
                        <div className='flex flex-col gap-1 mt-4 sm:mt-2 ml-4 sm:border-b sm:pb-4'>
                            <Link to={'/'} className='text-gray-600'>Shirt</Link>
                            <Link to={'/'} className='text-gray-600'>Short & Jeans</Link>
                            <Link to={'/'} className='text-gray-600'>Jacket</Link>
                            <Link to={'/'} className='text-gray-600'>Dress & Frock</Link>
                            <Link to={'/'} className='text-gray-600'>Hoodies</Link>
                        </div>
                    }
                    
                </div>

                <div className='border-b sm:border-none py-[12px] sm:py-[8px]'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-3'>
                            <img width='23' src="images/category/furniture.png" alt="" />
                            <Link to={'/'} className='font-semibold sm:font-normal'>Furniture</Link>
                        </div>
                        
                        {expandedCategory === 'furniture' 
                            ?
                            <button onClick={() => updateExpandedCategory('')} className={`mr-2`}>
                                <TiMinus className='sm:hidden'/>
                                <FiMinus className='hidden sm:flex'/>
                            </button>

                            :
                            <button onClick={() => updateExpandedCategory('furniture')} className={`mr-2`}>
                                <TiPlus className='sm:hidden'/>
                                <FiPlus className='hidden sm:flex'/>
                            </button>
                        }
                    </div>

                    {expandedCategory === 'furniture' &&
                        <div className='flex flex-col gap-1 mt-4 sm:mt-2 ml-4 sm:border-b sm:pb-4'>
                            <Link to={'/'} className='text-gray-600'>Bed</Link>
                            <Link to={'/'} className='text-gray-600'>Sofa</Link>
                            <Link to={'/'} className='text-gray-600'>Wardrobe</Link>
                            <Link to={'/'} className='text-gray-600'>Chair</Link>
                            <Link to={'/'} className='text-gray-600'>Table</Link>
                            <Link to={'/'} className='text-gray-600'>Dining Table</Link>
                        </div>
                    }
                    
                </div>

                <div className='border-b sm:border-none py-[12px] sm:py-[8px]'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-3'>
                            <img width='23' src="images/category/sneakers.png" alt="" />
                            <Link to={'/'} className='font-semibold sm:font-normal'>Footwear</Link>
                        </div>
                        
                        {expandedCategory === 'footwear' 
                            ?
                            <button onClick={() => updateExpandedCategory('')} className={`mr-2`}>
                                <TiMinus className='sm:hidden'/>
                                <FiMinus className='hidden sm:flex'/>
                            </button>

                            :
                            <button onClick={() => updateExpandedCategory('footwear')} className={`mr-2`}>
                                <TiPlus className='sm:hidden'/>
                                <FiPlus className='hidden sm:flex'/>
                            </button>
                        }
                    </div>

                    {expandedCategory === 'footwear' &&
                        <div className='flex flex-col gap-1 mt-4 sm:mt-2 ml-4 sm:border-b sm:pb-4'>
                            <Link to={'/'} className='text-gray-600'>Sports</Link>
                            <Link to={'/'} className='text-gray-600'>Formal</Link>
                            <Link to={'/'} className='text-gray-600'>Casual</Link>
                            <Link to={'/'} className='text-gray-600'>Safety Shoes</Link>
                        </div>
                    }
                    
                </div>

                <div className='border-b sm:border-none py-[12px] sm:py-[8px]'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-3'>
                            <img width='23' src="images/category/school-bag.png" alt="" />
                            <Link to={'/'} className='font-semibold sm:font-normal'>Bags</Link>
                        </div>
                        
                        {expandedCategory === 'bags' 
                            ?
                            <button onClick={() => updateExpandedCategory('')} className={`mr-2`}>
                                <TiMinus className='sm:hidden'/>
                                <FiMinus className='hidden sm:flex'/>
                            </button>

                            :
                            <button onClick={() => updateExpandedCategory('bags')} className={`mr-2`}>
                                <TiPlus className='sm:hidden'/>
                                <FiPlus className='hidden sm:flex'/>
                            </button>
                        }
                    </div>

                    {expandedCategory === 'bags' &&
                        <div className='flex flex-col gap-1 mt-4 sm:mt-2 ml-4 sm:border-b sm:pb-4'>
                            <Link to={'/'} className='text-gray-600'>Shopping Bag</Link>
                            <Link to={'/'} className='text-gray-600'>Gym Backpack</Link>
                            <Link to={'/'} className='text-gray-600'>School Bag</Link>
                            <Link to={'/'} className='text-gray-600'>Purse</Link>
                            <Link to={'/'} className='text-gray-600'>Wallet</Link>
                        </div>
                    }
                    
                </div>

                <div className='border-b sm:border-none py-[12px] sm:py-[8px]'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-3'>
                            <img width='23' src="images/category/dumbbells.png" alt="" />
                            <Link to={'/'} className='font-semibold sm:font-normal'>Fitness</Link>
                        </div>
                        
                        {expandedCategory === 'fitness' 
                            ?
                            <button onClick={() => updateExpandedCategory('')} className={`mr-2`}>
                                <TiMinus className='sm:hidden'/>
                                <FiMinus className='hidden sm:flex'/>
                            </button>

                            :
                            <button onClick={() => updateExpandedCategory('fitness')} className={`mr-2`}>
                                <TiPlus className='sm:hidden'/>
                                <FiPlus className='hidden sm:flex'/>
                            </button>
                        }
                    </div>

                    {expandedCategory === 'fitness' &&
                        <div className='flex flex-col gap-1 mt-4 sm:mt-2 ml-4 sm:border-b sm:pb-4'>
                            <Link to={'/'} className='text-gray-600'>Dumbbells</Link>
                            <Link to={'/'} className='text-gray-600'>Resistance Bands</Link>
                            <Link to={'/'} className='text-gray-600'>Yoga Mats</Link>
                            <Link to={'/'} className='text-gray-600'>Home Gym Systems</Link>
                        </div>
                    }
                    
                </div>

                <div className='border-b sm:border-none py-[12px] sm:py-[8px]'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-3'>
                            <img width='23' src="images/category/computer.png" alt="" />
                            <Link to={'/'} className='font-semibold sm:font-normal'>Electronics</Link>
                        </div>
                        
                        {expandedCategory === 'electronics' 
                            ?
                            <button onClick={() => updateExpandedCategory('')} className={`mr-2`}>
                                <TiMinus className='sm:hidden'/>
                                <FiMinus className='hidden sm:flex'/>
                            </button>

                            :
                            <button onClick={() => updateExpandedCategory('electronics')} className={`mr-2`}>
                                <TiPlus className='sm:hidden'/>
                                <FiPlus className='hidden sm:flex'/>
                            </button>
                        }
                    </div>

                    {expandedCategory === 'electronics' &&
                        <div className='flex flex-col gap-1 mt-4 sm:mt-2 ml-4 sm:border-b sm:pb-4'>
                            <Link to={'/'} className='text-gray-600'>Desktop</Link>
                            <Link to={'/'} className='text-gray-600'>Laptop</Link>
                            <Link to={'/'} className='text-gray-600'>Smart TV</Link>
                            <Link to={'/'} className='text-gray-600'>Camera</Link>
                            <Link to={'/'} className='text-gray-600'>Tablet</Link>
                            <Link to={'/'} className='text-gray-600'>Printer</Link>
                        </div>
                    }
                    
                </div>

                <div className='border-b sm:border-none py-[12px] sm:py-[8px]'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-3'>
                            <img width='23' src="images/category/shampoo.png" alt="" />
                            <Link to={'/'} className='font-semibold sm:font-normal'>Beauty & Cosmetics</Link>
                        </div>
                        
                        {expandedCategory === 'beauty & cosmetics' 
                            ?
                            <button onClick={() => updateExpandedCategory('')} className={`mr-2`}>
                                <TiMinus className='sm:hidden'/>
                                <FiMinus className='hidden sm:flex'/>
                            </button>

                            :
                            <button onClick={() => updateExpandedCategory('beauty & cosmetics')} className={`mr-2`}>
                                <TiPlus className='sm:hidden'/>
                                <FiPlus className='hidden sm:flex'/>
                            </button>
                        }
                    </div>

                    {expandedCategory === 'beauty & cosmetics' &&
                        <div className='flex flex-col gap-1 mt-4 sm:mt-2 ml-4 sm:border-b sm:pb-4'>
                            <Link to={'/'} className='text-gray-600'>Shampoo</Link>
                            <Link to={'/'} className='text-gray-600'>Sunscreen</Link>
                            <Link to={'/'} className='text-gray-600'>Makeup Kit</Link>
                            <Link to={'/'} className='text-gray-600'>Foundation</Link>
                            <Link to={'/'} className='text-gray-600'>Bodywash</Link>
                            <Link to={'/'} className='text-gray-600'>Facewash</Link>
                        </div>
                    }
                    
                </div>

            </div>

    
        </>
    )
}

export default Category
