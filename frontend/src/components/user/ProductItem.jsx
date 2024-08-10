import React from 'react'
import { FaHeart } from 'react-icons/fa';
import { CiShoppingCart } from "react-icons/ci";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
    return (
        <div className="z-0 relative flex-grow w-[200px] max-w-[180px] sm:max-w-[230px] bg-white px-3 py-2 shadow-sm rounded-xl border">
            <button className="absolute top-2 right-2 z-10 text-red-500">
                <FaHeart />
            </button>

            <Link>
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 sm:h-44 object-cover mb-3 rounded-lg"
                    data-tooltip-id="viewProductTooltip"
                    data-tooltip-content="View Product"
                />

                <ReactTooltip
                    id="viewProductTooltip"
                    place=""
                    type="light"
                    style={{
                        backgroundColor: "rgba(244, 244, 244, 0.2)",
                        color: "#1E4E40",
                        padding: "6px 10px",
                        fontWeight: "500"
                    }}
                />
            </Link>

            <div className='sm:px-2'>
                <h3 className="text-lg text-gray-700 leading-5 truncate">{product.name}</h3>

                <p className="text-xs text-gray-500 font-sans">{product.category}</p>

                <div className="flex justify-between items-center mt-2">
                    {product.offer ? (
                        <div className="flex items-baseline space-x-2">
                            <span className="text-lg text-green-700 font-semibold">₹{product.discountedPrice}</span>
                            <span className="text-gray-400 line-through">₹{product.price}</span>
                        </div>
                    ) : (
                        <span className="text-lg text-green-600 font-semibold">₹{product.price}</span>
                    )}

                    <div>
                        <div className='cursor-pointer text-slate-700 text-2xl hover:scale-105 transition-all duration-75' data-tooltip-id="addToCartTooltip" data-tooltip-content="Add to Cart">
                            <CiShoppingCart />
                        </div>
                        
                        <ReactTooltip
                            id="addToCartTooltip"
                            place="top"
                            effect="info"
                            style={{
                                backgroundColor: "rgba(192, 227, 214, 0.7)",
                                color: "#1E4E40",
                                padding: "6px 10px",
                                fontWeight: "500"
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem
