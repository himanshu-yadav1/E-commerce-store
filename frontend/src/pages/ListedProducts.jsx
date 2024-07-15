import React from 'react'

const products = [
    {
        id: 1,
        name: 'Glomy shoes',
        image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-admin/assets/img/products/p10.jpg',
        sold: 5,
        stock: 10,
        price: 1200
    },
    {
        id: 2,
        name: 'Full Cap t-Shirt',
        image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-admin/assets/img/products/p9.jpg',
        sold: 5,
        stock: 10,
        price: 1200
    },
    {
        id: 3,
        name: 'Full Sleeve t-Shirt',
        image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-admin/assets/img/products/p3.jpg',
        sold: 5,
        stock: 10,
        price: 1200
    },
    {
        id: 4,
        name: 'Round Cap with Black Frame',
        image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-admin/assets/img/products/p5.jpg',
        sold: 5,
        stock: 10,
        price: 1200
    },
    {
        id: 5,
        name: 'Round Cap with Black Frame',
        image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-admin/assets/img/products/p11.jpg',
        sold: 5,
        stock: 10,
        price: 1200
    },
    {
        id: 6,
        name: 'Full Cap t-Shirt',
        image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-admin/assets/img/products/p4.jpg',
        sold: 5,
        stock: 10,
        price: 1200
    },
    {
        id: 7,
        name: 'Full Sleeve t-Shirt',
        image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-admin/assets/img/products/p9.jpg',
        sold: 5,
        stock: 10,
        price: 1200
    },
    {
        id: 8,
        name: 'Full Sleeve t-Shirt',
        image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-admin/assets/img/products/p10.jpg',
        sold: 5,
        stock: 10,
        price: 1200
    },
];



const ProductCard = ({ product }) => (
    <div className="bg-cardBg py-cardPaddingY px-cardPaddingX shadow-cardShadow border-cardBorderTop rounded-cardBorderRadius p-4 hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <img src={product.image} alt={product.name} className="w-full h-44 object-cover mb-4 rounded-xl" />

        <h3 className="text-lg text-gray-700 leading-5 text-nowrap truncate">{product.name}</h3>

        <p className="text-xl font-s text-gray-900 mt-2">₹{product.price}</p>

        <div className='flex justify-between text-slate-500 mt-2'>
            <div className='flex items-baseline'>
                <label>Sold</label>
                <p>&nbsp;:&nbsp;{product.sold}</p>
            </div>
            <div className='flex items-baseline'>
                <label>Stock</label>
                <p>&nbsp;:&nbsp;{product.stock}</p>
            </div>
        </div>

        <div className="flex justify-between pt-3 ">
            <button className="uppercase cursor-pointer transition-all text-white px-6 rounded-md border border-[#F7AF9D] bg-[#F7AF9D] hover:bg-[#f99279] active:brightness-90">
                View
            </button>
            <button className="uppercase cursor-pointer transition-all text-slate-500 px-6 rounded-md border border-gray-300 bg-[#F7F7F7] hover:bg-[#c1c1c1] hover:text-white active:brightness-90">
                Edit
            </button>
        </div>
    </div>
);


function ListedProducts() {
    return (
        <div className="bg-mainBgColor py-mainPaddingY px-mainPaddingX">
            <div className="bg-cardBg py-cardPaddingY px-cardPaddingX shadow-sm border-cardBorderTop rounded-xl flex justify-between items-center">
                <h2 className="text-xl">Listed Products</h2>

                <select name="" id="" className='border border-slate-400 sm:w-[150px] px-2 py-1 rounded-md focus:outline-none'>
                    <option value="">All</option>
                    <option value="">In Stock</option>
                    <option value="">Out of Stock</option>
                    <option value="">Best Selling</option>
                </select>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-3">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ListedProducts
