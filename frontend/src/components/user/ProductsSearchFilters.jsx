import React, { useState } from 'react'
import Slider from '@mui/material/Slider';

function ProductsSearchFilters() {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    };


    const [priceRange, setPriceRange] = useState([200, 10000]);

    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
    };


    return (
        <div className="px-5 pt-5 bg-white border rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-3">Filter Products By</h2>


            <div className="border-t border-gray-200 pt-3 mb-2">
                <h3 className="text-md font-semibold mb-2">Category</h3>

                <ul className="space-y-2">
                    <li>
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox text-blue-500" defaultChecked />
                            <span className="ml-2 text-gray-700">Clothes</span>
                        </label>
                    </li>
                    <li>
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="ml-2 text-gray-700">Footwear</span>
                        </label>
                    </li>
                    <li>
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="ml-2 text-gray-700">Cosmetics</span>
                        </label>
                    </li>
                    <li>
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="ml-2 text-gray-700">Glasses</span>
                        </label>
                    </li>
                    {showMore && (
                        <>
                            <li>
                                <label className="flex items-center">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 text-gray-700">Jewelry</span>
                                </label>
                            </li>
                            <li>
                                <label className="flex items-center">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 text-gray-700">Bags</span>
                                </label>
                            </li>
                            <li>
                                <label className="flex items-center">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 text-gray-700">Perfume</span>
                                </label>
                            </li>
                        </>
                    )}
                </ul>

                <button
                    onClick={handleShowMore}
                    className="mt-2 text-blue-500 hover:text-blue-700 flex items-center"
                >
                    <span className="mr-1">{showMore ? '-' : '+'}</span> {showMore ? 'Less Categories' : 'More Categories'}
                </button>
            </div>


            <div className="border-t border-gray-200 pt-4 mb-2">
                <h3 className="text-md font-semibold mb-2">Price</h3>
                <Slider
                    value={priceRange}
                    onChange={handlePriceChange}
                    valueLabelDisplay="auto"
                    min={200}
                    max={1000}
                    sx={{
                        color: '#402768',
                        height: 2,
                        '& .MuiSlider-thumb': {
                            height: 14,
                            width: 14,
                            backgroundColor: '#fff',
                            border: '2px solid currentColor',
                        },
                        '& .MuiSlider-track': {
                            border: 'none',
                        },
                        '& .MuiSlider-rail': {
                            opacity: 0.5,
                            backgroundColor: '#bfbfbf',
                        },
                    }}
                />
                <div className="flex justify-between w-full">
                    <span>₹{priceRange[0]}</span>
                    <span>—</span>
                    <span>₹{priceRange[1]}</span>
                </div>
            </div>


            <div className="border-t border-gray-200 pt-4 mb-2">
                <h3 className="text-md font-semibold mb-2">Custom</h3>

                <ul className="space-y-2">
                    <li>
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox text-blue-500" defaultChecked />
                            <span className="ml-2 text-gray-700">Top Selling</span>
                        </label>
                    </li>
                    <li>
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="ml-2 text-gray-700">Trending</span>
                        </label>
                    </li>
                    <li>
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="ml-2 text-gray-700">New Arrivals</span>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ProductsSearchFilters
