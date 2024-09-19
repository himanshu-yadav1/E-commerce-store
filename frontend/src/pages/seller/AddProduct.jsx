import React, { useState } from 'react'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../../config/firebase';
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";

function AddProduct() {
    const categories = [
        {
            id: 1,
            name: 'Clothing',
            subCategories: [
                { id: 1, name: 'Dresses' },
                { id: 2, name: 'Tops & T-shirts' },
                { id: 3, name: 'Pants & Trousers' },
                { id: 4, name: 'Jackets & Coats' },
                { id: 5, name: 'Skirts' },
                { id: 6, name: 'Suits & Blazers' },
                { id: 7, name: 'Sweaters & Hoodies' },
                { id: 8, name: 'Activewear' },
                { id: 9, name: 'Other' }
            ]
        },
        {
            id: 2,
            name: 'Footwear',
            subCategories: [
                { id: 1, name: 'Sneakers' },
                { id: 2, name: 'Boots' },
                { id: 3, name: 'Sandals' },
                { id: 4, name: 'Heels' },
                { id: 5, name: 'Loafers' },
                { id: 6, name: 'Flats' },
                { id: 7, name: 'Slippers' },
                { id: 8, name: 'Other' }
            ]
        },
        {
            id: 3,
            name: 'Accessories',
            subCategories: [
                { id: 1, name: 'Bags & Handbags' },
                { id: 2, name: 'Belts' },
                { id: 3, name: 'Scarves & Shawls' },
                { id: 4, name: 'Hats & Caps' },
                { id: 5, name: 'Sunglasses' },
                { id: 6, name: 'Jewelry (Necklaces, Rings, Bracelets, Earrings)' },
                { id: 7, name: 'Watches' },
                { id: 8, name: 'Gloves' },
                { id: 9, name: 'Other' }
            ]
        },
        {
            id: 4,
            name: 'Sleepwear',
            subCategories: [
                { id: 1, name: 'Pajamas' },
                { id: 2, name: 'Nightgowns' },
                { id: 3, name: 'Robes' },
                { id: 4, name: 'Other' }
            ]
        },
        {
            id: 5,
            name: 'Outerwear',
            subCategories: [
                { id: 1, name: 'Overcoats' },
                { id: 2, name: 'Trench Coats' },
                { id: 3, name: 'Parkas' },
                { id: 4, name: 'Raincoats' },
                { id: 5, name: 'Other' },
            ]
        },
        {
            id: 6,
            name: 'Formal Wear',
            subCategories: [
                { id: 1, name: 'Evening Gowns' },
                { id: 2, name: 'Tuxedos' },
                { id: 3, name: 'Cocktail Dresses' },
                { id: 4, name: 'Wedding Attire' },
                { id: 5, name: 'Other' },
            ]
        },
        {
            id: 7,
            name: 'Swimwear',
            subCategories: [
                { id: 1, name: 'One-piece Swimsuits' },
                { id: 2, name: 'Cover-ups' },
                { id: 3, name: 'Board Shorts' },
                { id: 4, name: 'Other' },
            ]
        },
        {
            id: 8,
            name: 'Sportswear',
            subCategories: [
                { id: 1, name: 'Yoga Wear' },
                { id: 2, name: 'Gym Wear' },
                { id: 3, name: 'Running Gear' },
                { id: 4, name: 'Tennis Clothing' },
                { id: 5, name: 'Other' },
            ]
        },
        {
            id: 9,
            name: 'Seasonal Fashion',
            subCategories: [
                { id: 1, name: 'Beachwear' },
                { id: 2, name: 'Winter Wear' },
                { id: 3, name: 'Festival & Party Wear' },
                { id: 4, name: 'Other' },
            ]
        },
        {
            id: 10,
            name: 'Footwear Accessories',
            subCategories: [
                { id: 1, name: 'Shoe Laces' },
                { id: 2, name: 'Shoe Inserts' },
                { id: 3, name: 'Socks & Tights' },
                { id: 4, name: 'Other' },
            ]
        }
    ];


    const [product, setProduct] = useState({
        title: '',
        description: '',
        price: '',
        offer: false,
        discountedPrice: '',
        category: 'Clothing',
        subCategory: 'others',
        stock: '',
        productImages: [],
    });


    const [files, setFiles] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [uploadError, setUploadError] = useState('');



    // Handle text input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    // Handle offer checkbox change
    const handleOfferChange = (e) => {
        const { value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            offer: value === 'true',
            discountedPrice: value === 'true' ? prevProduct.discountedPrice : '',
        }));
    };


    // Handle image selection
    const handleImageChange = (e) => {
        const filesArray = Array.from(e.target.files);
        setFiles((prevFiles) => [...prevFiles, ...filesArray]); // Allow selecting more images
    };


    // Remove selected image before upload
    const handleRemoveSelectedImage = (index) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };


    // Remove uploaded image
    const handleRemoveUploadedImage = (index) => {
        setProduct((prevProduct) => ({
            ...prevProduct,
            productImages: prevProduct.productImages.filter((_, i) => i !== index),
        }));
    };


    // Upload images to Firebase
    const handleFileUpload = () => {
        if (files.length > 0) {
            setUploading(true);
            const promises = files.map((file) => uploadImageOnFirebase(file));

            Promise.all(promises)
                .then((urls) => {
                    setProduct((prevProduct) => ({
                        ...prevProduct,
                        productImages: [...prevProduct.productImages, ...urls], // Add uploaded images to product
                    }));
                    setFiles([]); // Clear selected files after upload
                    setUploadError('');
                    setUploading(false);
                })
                .catch(() => {
                    setUploadError('Error uploading images. Please try again.');
                    setUploading(false);
                });
        } else {
            setUploadError('Please select at least one image.');
        }
    };


    // Firebase image upload helper
    const uploadImageOnFirebase = async (file) => {
        return new Promise((resolve, reject) => {
            const storage = getStorage(app);
            const fileName = new Date().getTime() + file.name;
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    // add a progress indicator here if needed
                },
                (error) => {
                    reject(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        resolve(downloadURL);
                    });
                }
            );
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Product submitted:', product);
    };



    return (
        <div className="bg-mainBgColor py-mainPaddingY px-mainPaddingX">
            <div className="bg-cardBg py-cardPaddingY px-cardPaddingX shadow-cardShadow border-cardBorderTop rounded-cardBorderRadius p-6">
                <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-4">
                        <label
                            className="text-gray-500 text-sm font-semibold relative top-2 ml-[9px] px-[6px] bg-white w-fit"
                        >
                            Title:
                        </label>

                        <input
                            type="text"
                            name='title'
                            value={product.title}
                            onChange={handleChange}
                            className="h-[42px] px-[13px] py-[6px] border border-gray-300 rounded-md focus:outline-none"
                            required
                        />
                    </div>


                    <div className="flex flex-col mb-4">
                        <label
                            className="text-gray-500 text-sm font-semibold relative top-2 ml-[9px] px-[6px] bg-white w-fit"
                        >
                            Description:
                        </label>

                        <textarea
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                            className="min-h-20 w-full px-[13px] py-[6px] border border-gray-300 rounded-md focus:outline-none"
                            required
                        />
                    </div>


                    <div className='mb-4 flex gap-4'>
                        <div className="flex flex-col w-[32%]">
                            <label
                                className="text-gray-500 text-sm font-semibold relative top-2 ml-[9px] px-[6px] bg-white w-fit"
                            >
                                Price:
                            </label>

                            <input
                                type="number"
                                name="price"
                                value={product.price}
                                onChange={handleChange}
                                className="h-[42px] px-[13px] py-[6px] border border-gray-300 rounded-md focus:outline-none"
                                required
                            />
                        </div>

                        <div className="flex flex-col w-[32%]">
                            <label
                                className="text-gray-500 text-sm font-semibold relative top-2 ml-[9px] px-[6px] bg-white w-fit"
                            >
                                Stock:
                            </label>

                            <input
                                type="number"
                                name="stock"
                                value={product.stock}
                                onChange={handleChange}
                                className="h-[42px] px-[13px] py-[6px] border border-gray-300 rounded-md focus:outline-none"
                                required
                            />
                        </div>

                        <div className="flex flex-col w-[32%]">
                            <label
                                className="text-gray-500 text-sm font-semibold relative top-2 ml-[9px] px-[6px] bg-white w-fit"
                            >
                                Category:
                            </label>

                            <select
                                name="category"
                                value={product.category}
                                onChange={handleChange}
                                className="h-[42px] px-[13px] py-[6px] border border-gray-300 rounded-md focus:outline-none"
                                required
                            >
                                {categories.map((category) => (
                                    <option key={category.id} value={category.name}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>


                    <div className='mb-4 flex gap-4'>
                        <div className="flex flex-col w-[32%]">
                            <label
                                className="text-gray-500 text-sm font-semibold relative top-2 ml-[9px] px-[6px] bg-white w-fit"
                            >
                                Sub Category:
                            </label>

                            <select
                                name="subCategory"
                                value={product.subCategory}
                                onChange={handleChange}
                                className="h-[42px] px-[13px] py-[6px] border border-gray-300 rounded-md focus:outline-none"
                                required
                            >
                                {categories.filter((cat) => cat.name === product.category)[0].subCategories.map((subCategory) => (
                                    <option key={subCategory.id} value={subCategory.name}>
                                        {subCategory.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col w-[32%]">
                            <label
                                className="text-gray-500 text-sm font-semibold relative top-2 ml-[9px] px-[6px] bg-white w-fit"
                            >
                                Offer:
                            </label>

                            <select
                                name="offer"
                                value={product.offer}
                                onChange={handleOfferChange}
                                className="h-[42px] px-[13px] py-[6px] border border-gray-300 rounded-md focus:outline-none"
                                required
                            >
                                <option value={false}>No</option>
                                <option value={true}>Yes</option>
                            </select>
                        </div>

                        {product.offer &&
                            <div className="flex flex-col w-[32%]">
                                <label
                                    className="text-gray-500 text-sm font-semibold relative top-2 ml-[9px] px-[6px] bg-white w-fit"
                                >
                                    Discounted Price:
                                </label>

                                <input
                                    type="number"
                                    name="discountedPrice"
                                    value={product.discountedPrice}
                                    onChange={handleChange}
                                    className="h-[42px] px-[13px] py-[6px] border border-gray-300 rounded-md focus:outline-none"
                                />
                            </div>
                        }
                    </div>


                    <div className="flex flex-col mb-4">
                        {uploadError && <p className="text-red-500 mt-2">{uploadError}</p>}

                        <label className="text-gray-500 text-sm font-semibold relative top-2 ml-[9px] px-[6px] bg-white w-fit">
                            Product Images:
                        </label>

                        {/* Select image */}
                        {files.length === 0 && (
                            <label className="flex flex-col gap-5 cursor-pointer items-center justify-center border-2 border-dashed border-gray-300 p-6 rounded-md" htmlFor="file">
                                <span className="text-[50px]"><IoCloudUploadOutline /></span>
                                <span className="font-normal text-gray-600 select-none">Click to select image</span>

                                <input
                                    type="file"
                                    id="file"
                                    name="productImages"
                                    onChange={handleImageChange}
                                    className="hidden"
                                    multiple
                                    required
                                    accept="image/*"
                                />
                            </label>
                        )}

                        {/* Selected image previews */}
                        {files.length > 0 &&
                            <div className="flex flex-col gap-5 border-2 border-dashed border-gray-300 p-6 rounded-md">
                                <div className="flex flex-wrap gap-2">
                                    {files.map((file, index) => (
                                        <div key={index} className="relative">
                                            <img src={URL.createObjectURL(file)} alt={`Selected ${index}`} className="h-24" />
                                            <span
                                                className="absolute top-0 right-0 text-white text-2xl cursor-pointer"
                                                onClick={() => handleRemoveSelectedImage(index)}
                                            >
                                                <IoMdCloseCircle />
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <label htmlFor="file">
                                    <span className='cursor-pointer text-blue-600'>Select more</span>
                                    <input
                                        type="file"
                                        id="file"
                                        name="productImages"
                                        onChange={handleImageChange}
                                        className="hidden"
                                        multiple
                                        required
                                        accept="image/*"
                                    />
                                </label>
                            </div>
                        }
                    </div>


                    {/* Upload button */}
                    {files.length > 0 &&
                        <button
                            type="button"
                            onClick={handleFileUpload}
                            className="mt-4 uppercase cursor-pointer transition-all text-white px-[13px] py-[6px] rounded-md border border-[#F7AF9D] bg-[#F7AF9D] hover:bg-[#f99279] active:brightness-90"
                            disabled={uploading}
                        >
                            {uploading ? 'Uploading...' : 'Upload Images'}
                        </button>
                    }


                    {/* Uploaded image previews */}
                    {product.productImages.length > 0 && (
                        <div className='mt-4'>
                            <span>Uploaded Images:</span>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {product.productImages.map((url, index) => (
                                    <div key={index} className="relative">
                                        <img src={url} alt={`Uploaded ${index}`} className="h-24" />
                                        <span
                                            className="absolute top-0 right-0 text-white text-2xl cursor-pointer"
                                            onClick={() => handleRemoveUploadedImage(index)}
                                        >
                                            <IoMdCloseCircle />
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}


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
