import React from 'react'
import HeaderBar from '../../components/user/HeaderBar';
import ProductItem from '../../components/user/ProductItem';

function Wishlist() {
    const wishlistProducts = [
        {
            image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-html/assets/images/product-image/96_1.jpg',
            name: 'Running & Trekking Shoes',
            category: 'Footwear',
            price: 2200,
            discountedPrice: 1590.00,
            offer: false,
        },
        {
            image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-html/assets/images/product-image/93_1.jpg',
            name: 'Mens Winter Leathers Jacket',
            category: 'Jackets',
            price: 1200.00,
            discountedPrice: 990.00,
            offer: true,
        },
        {
            image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-html/assets/images/product-image/88_1.jpg',
            name: 'Relaxed Short full Sleeve T-Shirt',
            category: 'SHORTS',
            price: 630.00,
            discountedPrice: 250.00,
            offer: true,
        },
        {
            image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-html/assets/images/product-image/6_1.jpg',
            name: 'Round Neck T-Shirt',
            category: 'T-SHIRTS',
            price: 600.00,
            discountedPrice: 550.00,
            offer: true,
        },
        {
            image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-html/assets/images/product-image/94_1.jpg',
            name: 'Mens Winter Leathers Jacket',
            category: 'Jacket',
            price: 6000.00,
            discountedPrice: 5500.00,
            offer: true,
        },
        {
            image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-html/assets/images/product-image/101_1.jpg',
            name: 'Boot With Suede Detail',
            category: 'Foootwear',
            price: 4900.00,
            discountedPrice: 3950.00,
            offer: true,
        },
    ];


    return (
        <>
            <div>
                <HeaderBar />
            </div>

            {wishlistProducts.length > 0 ? (
                <div className="py-10 px-5 mb-20 sm:mb-0">
                    <div className='flex justify-between items-center'>
                        <h1 className="text-xl text-gray-500 font-semibold font-serif">Wishlist</h1>
                    </div>

                    <div className="flex flex-wrap gap-x-3 sm:gap-x-5 gap-y-3 mt-5">
                        {wishlistProducts.map((product, index) => (
                            <ProductItem key={index} product={product} />
                        ))}
                    </div>
                </div>
            ) :
                (
                    <div className="flex mt-40 justify-center">
                        <h1 className="text-2xl font-bold text-slate-500">Your wishlist is empty</h1 >
                    </div >
                )
            }

        </>
    )
}

export default Wishlist
