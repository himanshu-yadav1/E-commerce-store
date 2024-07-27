import React from 'react'

function BrowseCollectionCard({ image, title, price }) {
    return (
        <div className="flex justify-between items-center py-4 pl-4 rounded-md shadow-sm border">
            <div>
                <h3 className="text-lg font-semibold text-[#5d5173]">{title}</h3>
                <p className="text-gray-500 leading-4 pt-1">Starting at <br /> ₹ {price}</p>
                <button className="mt-4 px-2 py-1  shadow-sm border border-[#c8a6fe] text-[#762aef] rounded-md hover:shadow-lg">Shop Now</button>
            </div>

            <img width={120} src={image} alt={title} />
        </div>
    );
}

export default BrowseCollectionCard
