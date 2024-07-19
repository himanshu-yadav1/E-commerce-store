import React, { useState } from 'react'

function AddProduct() {
    const [product, setProduct] = useState({
        title: '',
        description: '',
        price: '',
        offer: false,
        discountedPrice: '',
        category: 'others',
        stock: '',
        productImages: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleOfferChange = (e) => {
        const { value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            offer: value === 'true',
            discountedPrice: value === 'true' ? prevProduct.discountedPrice : '',
        }));
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setProduct((prevProduct) => ({
            ...prevProduct,
            productImages: files,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="bg-mainBgColor py-mainPaddingY px-mainPaddingX">
            <div className="bg-cardBg py-cardPaddingY px-cardPaddingX shadow-cardShadow border-cardBorderTop rounded-cardBorderRadius p-6">
                <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={product.title}
                            onChange={handleChange}
                            className="w-full px-[13px] py-[6px] border border-gray-300 rounded-md focus:outline-none"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Description</label>
                        <textarea
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                            className="w-full px-[13px] py-[6px] border border-gray-300 rounded-md focus:outline-none"
                            required
                        />
                    </div>

                    <div className='mb-4 flex justify-between gap-4'>
                        <div className="w-[50%]">
                            <label className="block text-gray-700 mb-1">Price</label>
                            <input
                                type="number"
                                name="price"
                                value={product.price}
                                onChange={handleChange}
                                className="w-full px-[13px] py-[6px] border border-gray-300 rounded-md focus:outline-none"
                                required
                            />
                        </div>

                        <div className="w-[50%]">
                            <label className="block text-gray-700 mb-1">Stock</label>
                            <input
                                type="number"
                                name="stock"
                                value={product.stock}
                                onChange={handleChange}
                                className="w-full px-[13px] py-[6px] border border-gray-300 rounded-md focus:outline-none"
                                required
                            />
                        </div>
                    </div>

                    <div className='mb-4 flex justify-between gap-4'>
                        <div className="w-[50%]">
                            <label className="block text-gray-700 mb-1">Offer</label>
                            <select
                                name="offer"
                                value={product.offer}
                                onChange={handleOfferChange}
                                className="w-full px-[13px] py-[6px] border border-gray-300 rounded-md focus:outline-none"
                                required
                            >
                                <option value={false}>No</option>
                                <option value={true}>Yes</option>
                            </select>
                        </div>

                        <div className="w-[50%]">
                            <label className="block text-gray-700 mb-1">Category</label>
                            <select
                                name="category"
                                value={product.category}
                                onChange={handleChange}
                                className="w-full px-[13px] py-[6px] border border-gray-300 rounded-md focus:outline-none"
                                required
                            >
                                <option value="electronics">Electronics</option>
                                <option value="fashion">Fashion</option>
                                <option value="home">Home</option>
                                <option value="beauty">Beauty</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                    </div>

                    {product.offer && (
                        <div className="mb-4 w-[50%]">
                            <label className="block text-gray-700 mb-1">Discounted Price</label>
                            <input
                                type="number"
                                name="discountedPrice"
                                value={product.discountedPrice}
                                onChange={handleChange}
                                className="w-full px-[13px] py-[6px] border border-gray-300 rounded-md focus:outline-none"
                            />
                        </div>
                    )}

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Product Images</label>
                        <input
                            type="file"
                            name="productImages"
                            onChange={handleImageChange}
                            className="w-full px-[13px] py-[6px] border border-gray-300 rounded-md focus:outline-none"
                            multiple
                            required
                        />
                    </div>

                    <div className='flex justify-end'>
                        <button
                            type="submit"
                            className="mt-4 uppercase cursor-pointer transition-all text-white px-[13px] py-[6px] rounded-md border border-[#F7AF9D] bg-[#F7AF9D] hover:bg-[#f99279] active:brightness-90"
                        >
                            Add Product
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct
