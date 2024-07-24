import React from 'react'
import Menu from '../../components/user/Menu'
import HeroSection from '../../components/user/HeroSection'
import HeaderBar from '../../components/user/HeaderBar'
import Category from '../../components/user/Category'
import CategoryCard from '../../components/user/CategoryCard'
import ProductItem2 from '../../components/user/ProductItem2'
import Footer from '../../components/user/Footer'
import ProductItem from '../../components/user/ProductItem'
import Features from '../../components/user/Features'


function Home() {
    const product = [
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
            image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-html/assets/images/product-image/109_1.jpg',
            name: 'Men Leather Reversible Belt',
            category: 'Belt',
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
            image: 'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-html/assets/images/product-image/109_1.jpg',
            name: 'Men Leather Reversible Belt',
            category: 'Belt',
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

    const categoryCardsData = [
        {
            icon: 'images/glasses.png',
            name: 'GLASSES & LENS',
            link: '#',
            bg_color: '#e9e9fe'
        },
        {
            icon: 'images/denim-shorts.png',
            name: 'SHORTS & JEANS',
            link: '#',
            bg_color: '#d3faf3'
        },
        {
            icon: 'images/shirt.png',
            name: 'T-SHIRTS',
            link: '#',
            bg_color: '#feefd8'
        },
        {
            icon: 'images/jacket.png',
            name: 'JACKETS',
            link: '#',
            bg_color: '#d7ffe0'
        },
    ];

    return (
        <div>
            <div className='hidden sm:inline'>
                <Menu />
            </div>

            <div className='sm:hidden'>
                <HeaderBar />
            </div>

            <div className='p-5 sm:pt-0'>
                <HeroSection />
            </div>


            <div className='hidden sm:block'>
                <div className="flex justify-between p-5 gap-5 overflow-auto">
                    {categoryCardsData.map((category, index) => (
                        <CategoryCard key={index} category={category} />
                    ))}
                </div>
            </div>

            <div className='flex items-start p-5 pt-3 mt-6 sm:mt-0'>
                <div className='hidden md:block w-[20%] mr-5 sticky top-5 mt-2'>
                    <Category />
                </div>

                <div className='md:w-[80%]'>
                    <div>
                        <p className='mb-4 uppercase text-2xl text-[#1E4E40] border-b'>trending products</p>

                        <div className='flex sm:hidden justify-center flex-wrap gap-x-5 gap-y-3'>
                            {product.slice(6, 12).map((product, index) => (
                                <ProductItem2 key={index} product={product} />
                            ))}
                        </div>

                        <div className='hidden sm:flex justify-center flex-wrap gap-x-5 gap-y-3'>
                            {product.slice(4, 12).map((product, index) => (
                                <ProductItem key={index} product={product} />
                            ))}
                        </div>
                    </div>


                    <div className='mt-9'>
                        <p className='mb-4 uppercase text-2xl text-[#1E4E40] border-b'>Top Selling products</p>

                        <div className='flex sm:hidden justify-center flex-wrap gap-x-5 gap-y-3'>
                            {product.slice(0, 6).map((product, index) => (
                                <ProductItem2 key={index} product={product} />
                            ))}
                        </div>

                        <div className='hidden sm:flex justify-center flex-wrap gap-x-5 gap-y-3'>
                            {product.slice(0, 8).map((product, index) => (
                                <ProductItem key={index} product={product} />
                            ))}
                        </div>
                    </div>


                    <div className='mt-9'>
                        <p className='mb-4 uppercase text-2xl text-[#1E4E40] border-b'>New Products</p>

                        <div className='flex sm:hidden justify-center flex-wrap gap-x-5 gap-y-3'>
                            {product.slice(4, 10).map((product, index) => (
                                <ProductItem2 key={index} product={product} />
                            ))}
                        </div>

                        <div className='hidden sm:flex justify-center flex-wrap gap-x-5 gap-y-3'>
                            {product.slice(3, 11).map((product, index) => (
                                <ProductItem key={index} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <Features />
            </div>


            <div className='mt-6'>
                <Footer />
            </div>
        </div>
    )
}

export default Home
