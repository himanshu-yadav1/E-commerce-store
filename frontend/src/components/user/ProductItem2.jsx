import React from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { Link } from 'react-router-dom';

function ProductItem2({ product }) {
    return (
        <>
            <Link
                className="flex flex-grow w-[250px] sm:max-w-[310px] items-center gap-10 sm:gap-5 px-4 sm:px-3 py-2 bg-white rounded-xl border border-gray-200 transition-all duration-75 shadow-sm hover:shadow-md"
                data-tooltip-id="viewProductTooltip"
                data-tooltip-content="View Product"
            >
                <img width={60} src={product.image} alt={product.name} />

                <div className="flex flex-col overflow-hidden">
                    <h3 className="font-semibold text-gray-800 text-sm truncate">{product.name}</h3>
                    <p className="text-gray-500 text-xs uppercase">{product.category}</p>
                    {product.offer ? (
                        <div className="flex items-center mt-1">
                            <span className="text-green-700 font-semibold text-lg">₹{product.discountedPrice}</span>
                            <span className="text-gray-400 line-through ml-2">₹{product.price}</span>
                        </div>
                    ) : (
                        <span className="text-green-700 font-semibold text-lg">₹{product.price}</span>
                    )}
                </div>
            </Link>

            <ReactTooltip
                id="viewProductTooltip"
                place=""
                type="light"
                style={{
                    backgroundColor: "rgba(244, 244, 244, 0.8)",
                    color: "#1e344e",
                    padding: "6px 10px",
                    fontWeight: "500"
                }}
            />
        </>
    );
}

export default ProductItem2
