import React from 'react'
import ProductsSearchFilters from '../../components/user/ProductsSearchFilters'
import Menu from '../../components/user/Menu'
import ProductItem from '../../components/user/ProductItem'
import Footer from '../../components/user/Footer';
import BrowseCollectionCard from '../../components/user/BrowseCollectionCard';
import HeaderBar from '../../components/user/HeaderBar';

function SearchPage() {
    const browseCollections = [
        {
            image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-html/assets/images/product-image/101_1.jpg',
            title: "Footwear",
            price: 799.00
        },
        {
            image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-html/assets/images/product-image/90_1.jpg',
            title: "Women's Fashion",
            price: 599.00
        },
        {
            image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-html/assets/images/product-image/93_1.jpg',
            title: "Men's Fashion",
            price: 499.00
        },
        {
            image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-html/assets/images/product-image/109_1.jpg',
            title: 'Accessories',
            price: 199.00
        },
    ];


    const products = [
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
            image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-html/assets/images/product-image/91_1.jpg',
            name: 'Pure Garment Dyed Cotton Shirt',
            category: 'Shirt',
            price: 490.00,
            discountedPrice: 390.00,
            offer: true,
        },
        {
            image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-html/assets/images/product-image/6_2.jpg',
            name: 'Round Neck T-Shirt',
            category: 'T-SHIRTS',
            price: 990.00,
            discountedPrice: 850.00,
            offer: false,
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
            image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-html/assets/images/product-image/96_1.jpg',
            name: 'Running & Trekking Shoes',
            category: 'Footwear',
            price: 2000,
            discountedPrice: 1590.00,
            offer: false,
        },
        {
            image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-html/assets/images/product-image/93_1.jpg',
            name: 'Mens Winter Leathers Jacket',
            category: 'Jackets',
            price: 1900.00,
            discountedPrice: 1790.00,
            offer: true,
        },
        {
            image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-html/assets/images/product-image/99_1.jpg',
            name: 'Sports Claw Women Shoes',
            category: 'Footwear',
            price: 1200.00,
            discountedPrice: 990.00,
            offer: true,
        },
        {
            image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-html/assets/images/product-image/98_1.jpg',
            name: 'Silver Deer Heart Necklace',
            category: 'Footwear',
            price: 490.00,
            discountedPrice: 390.00,
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
            {/* <div className='hidden sm:inline'>
                <Menu />
            </div> */}

            <div>
                <HeaderBar />
            </div>


            <div className='flex items-start sm:p-5 mt-6 sm:mt-2'>
                <div className="hidden md:block md:w-[20%] mr-5 sticky top-1">
                    <ProductsSearchFilters />
                </div>

                <div className='md:w-[80%]'>
                    <div className='flex justify-center flex-wrap gap-x-3 sm:gap-x-5 gap-y-3'>
                        {products.slice(0, 12).map((product, index) => (
                            <ProductItem key={index} product={product} />
                        ))}
                        {products.slice(0, 12).map((product, index) => (
                            <ProductItem key={index} product={product} />
                        ))}
                    </div>
                </div>
            </div>


            <div className='px-5 mt-14 sm:mt-8 mb-8'>
                <p className='text-center uppercase text-xl text-[#1E4E40] mb-2'>Browse The Collection of Top Categories</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {browseCollections.map((product, index) => (
                        <BrowseCollectionCard
                            key={index}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                        />
                    ))}
                </div>
            </div>


            <div className='mt-6'>
                <Footer />
            </div>
        </>
    )
}

export default SearchPage
