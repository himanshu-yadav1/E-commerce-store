import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import HeaderBar from "../../components/user/HeaderBar";
import Footer from "../../components/user/Footer";
import Features from "../../components/user/Features";

function ProductPage() {
    const [quantity, setQuantity] = useState(1);

    const productState = {
        images: [{ url: "https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-html/assets/images/product-image/96_1.jpg" }, { url: "https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-html/assets/images/product-image/96_1.jpg" }],
        title: "Running & Trekking Shoes",
        category: "Footwear",
        price: 2200,
        discountedPrice: 1590.00,
        offer: true,
        totalratings: 4,
        brand: "Nike",
        tags: "Shoes, Footwear",
        description: `
            <p><strong>Nike Running & Trekking Shoes</strong></p>
            <ul>
            <li><strong>Premium Build</strong>: High-quality materials ensure durability and longevity, whether you’re hitting the trail or the track.</li>
            <li><strong>Breathable Design</strong>: The lightweight mesh allows air circulation, keeping your feet cool and dry during intense activities.</li>
            <li><strong>Superior Cushioning</strong>: Nike's advanced cushioning technology absorbs impact, giving you a smooth and comfortable ride, no matter the terrain.</li>
            <li><strong>All-Terrain Grip</strong>: The durable outsole provides excellent traction on a variety of surfaces, ensuring you stay steady on your feet.</li>
            <li><strong>Stylish & Versatile</strong>: The sleek white color adds a clean, modern look, making these shoes suitable for both outdoor adventures and casual wear.</li>
            </ul>
            <p>Ideal for athletes and outdoor enthusiasts, the Nike Running & Trekking Shoes are designed to keep you moving comfortably and confidently, no matter where your journey takes you.</p>
        `
    };

    return (
        <>
            <HeaderBar />


            <div className="px-5 sm:py-5 mt-6 sm:mt-2">
                <div className="container mx-auto border bg-white p-5 shadow-sm rounded-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="flex justify-between gap-4">
                            <div className="flex flex-col gap-2">
                                {productState.images?.map((item, index) => (
                                    <div key={index} className="border px-2 py-1 rounded-lg cursor-pointer hover:shadow-md">
                                        <img
                                            src={item.url}
                                            alt="Thumbnail"
                                            className="w-12 h-12 object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center items-center w-full">
                                <img
                                    src={productState.images[1].url}
                                    alt="Product"
                                    className="w-60 h-60 sm:w-80 sm:h-80 object-contain"
                                />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold sm:border-b mt-3 sm:mt-0">{productState?.title}</h3>

                            {productState.offer ? (
                                <div className="flex items-baseline space-x-2 mt-2">
                                    <span className="text-2xl sm:text-xl text-green-700 font-semibold">₹{productState.discountedPrice}</span>
                                    <span className="text-lg sm:text-base text-gray-400 line-through">₹{productState.price}</span>
                                </div>
                            ) : (
                                <span className="text-2xl sm:text-xl text-green-600 font-semibold mt-2">₹{productState.price}</span>
                            )}

                            <div className="flex justify-between sm:justify-start gap-4 items-center">
                                <div className="flex items-center gap-3">
                                    <ReactStars
                                        count={5}
                                        size={22}
                                        value={productState?.totalratings}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className="text-gray-500">(2 reviews)</p>
                                </div>
                                <a href="#review" className="text-sm text-blue-500 underline">
                                    Write a Review
                                </a>
                            </div>

                            <div className="mt-4 leading-5">
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="font-semibold">Brand:</span>
                                    <span>{productState?.brand}</span>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="font-semibold">Category:</span>
                                    <span>{productState?.category}</span>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="font-semibold">Tags:</span>
                                    <span>{productState?.tags}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mt-4">
                                <span className="flex justify-between border">
                                    <span onClick={() => setQuantity(quantity - 1)} className="font-semibold text-white bg-slate-400 px-3 py-1 cursor-pointer rounded-tl-md rounded-bl-md">-</span>
                                    <span className="text-center w-10 px-2 py-1">{quantity}</span>
                                    <span onClick={() => setQuantity(quantity + 1)} className="font-semibold text-white bg-slate-400 px-3 py-1 cursor-pointer rounded-tr-md rounded-br-md">+</span>
                                </span>
                                <Link
                                    to="/"
                                    className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600 focus:outline-none"
                                >
                                    Buy Now
                                </Link>
                            </div>

                            <div className="flex items-center gap-4 mt-4">
                                <button className="bg-blue-500 text-white px-4 py-2 sm:py-1 rounded-md hover:bg-blue-600 flex items-center cursor-pointer">
                                    <IoCartOutline className="mr-2" /> Add to Cart
                                </button>
                                <button className="bg-blue-500 text-white px-4 py-2 sm:py-1 rounded-md hover:bg-blue-600 flex items-center cursor-pointer">
                                    <AiOutlineHeart className="mr-2" /> Add to Wishlist
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h4 className="text-lg font-semibold">Shipping & Returns</h4>
                        <p className="text-gray-500 sm:p-4 pt-2">
                            Free shipping and returns available on all orders! We ship all
                            US domestic orders within <strong>5-10 business days!</strong>
                        </p>
                    </div>

                    <div className="mt-4">
                        <h4 className="text-lg font-semibold">Description</h4>
                        <p
                            className="text-gray-500 sm:p-4 pt-2"
                            dangerouslySetInnerHTML={{ __html: productState?.description }}
                        />
                    </div>
                </div>
            </div>


            <div className="px-5 sm:py-5 mt-6 sm:mt-2 mb-8 sm:mb-0">
                <div id="review" className="container mx-auto border bg-white p-5 shadow-sm rounded-xl">
                    <div className="flex justify-between">
                        <h4 className="text-xl font-semibold">Reviews</h4>
                        <div className="flex items-center gap-3">
                            <ReactStars
                                count={5}
                                size={18}
                                value={productState?.totalratings}
                                edit={false}
                                activeColor="#ffd700"
                            />
                            <p className="text-gray-500 text-sm">(2 reviews)</p>
                        </div>
                    </div>

                    <div className="bg-white sm:px-5 mt-3">
                        <form className="flex flex-col mt-4">
                            <ReactStars
                                count={5}
                                size={24}
                                value={0}
                                edit={true}
                                activeColor="#ffd700"
                            />
                            <textarea
                                className="border p-3 w-full rounded-md focus:outline-none"
                                placeholder="Comments"
                                rows="4"
                            ></textarea>
                            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md self-end hover:bg-blue-600">
                                Submit Review
                            </button>
                        </form>

                        <div className="flex flex-col gap-3 pb-3 mt-4">
                            <div>
                                <div className="flex items-center gap-2">
                                    <h6 className="font-semibold text-gray-600">Mohan</h6>
                                    <ReactStars
                                        count={5}
                                        size={18}
                                        value={3}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                </div>
                                <p className="text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                                    animi ducimus quas assumenda ex quisquam consequatur maiores,
                                    quam fuga rem!
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2">
                                    <h6 className="font-semibold text-gray-600">Rohan</h6>
                                    <ReactStars
                                        count={5}
                                        size={18}
                                        value={3}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                </div>
                                <p className="text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                                    animi ducimus quas assumenda ex quisquam consequatur maiores,
                                    quam fuga rem!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Features />
            <Footer />
        </>
    );
}

export default ProductPage
