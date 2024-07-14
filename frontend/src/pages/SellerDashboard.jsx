import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { BarChart } from '@mui/x-charts/BarChart'
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart'
import ReactStars from 'react-rating-stars-component';

function SellerDashboard() {
    const { currentUser } = useSelector((state) => state.user)
    const navigate = useNavigate()

    useEffect(() => {
        if (!currentUser) {
            navigate('/signin')
        }

    }, [])

    const newCustomers = [12, 4, 5, 10, 23, 7, 5]
    const oldCustomers = [24, 24, 10, 21, 19, 11, 14]


    const products = [
        {
            id: 1,
            name: 'Soft Fluffy Cats',
            image: '/images/seller-dashboard/product-detail-3.png',
            productId: '#327',
            price: '1,170',
            quantity: 28,
            sale: 'On sale',
            revenue: '32,885',
            status: 'Not Available',
            rating: 3
        },
        {
            id: 2,
            name: 'Taste of the Wild Formula Finder',
            image: '/images/seller-dashboard/product-detail-1.png',
            productId: '#380',
            price: '899',
            quantity: 10,
            sale: 'On sale',
            revenue: '10,555',
            status: 'Not Available',
            rating: 4
        },
        {
            id: 3,
            name: 'Wellness Natural Food',
            image: '/images/seller-dashboard/product-detail-3.png',
            productId: '#126',
            price: '522',
            quantity: 578,
            sale: '--/--',
            revenue: '20,287',
            status: 'Not Available',
            rating: 4.5
        },
        {
            id: 4,
            name: 'Dog Food Rachael Ray',
            image: '/images/seller-dashboard/product-detail-1.png',
            productId: '#582',
            price: '1,481',
            quantity: 36,
            sale: '--/--',
            revenue: '47,522',
            status: 'Available',
            rating: 5
        },
        {
            id: 5,
            name: 'Best Buddy Bits Dog Treats',
            image: '/images/seller-dashboard/product-detail-3.png',
            productId: '#293',
            price: '648',
            quantity: 84,
            sale: '--/--',
            revenue: '21,978',
            status: 'Not Available',
            rating: 3.5
        }
    ];


    const orders = [
        {
            id: 1,
            name: 'Soft Fluffy Cats',
            image: '/images/seller-dashboard/product-detail-3.png',
            orderId: '#327',
            price: '1,170',
            quantity: 28,
            delivery_date: '12/07/2024'
        },
        {
            id: 2,
            name: 'Taste of the Wild Formula Finder',
            image: '/images/seller-dashboard/product-detail-1.png',
            orderId: '#380',
            price: '899',
            quantity: 10,
            delivery_date: '12/07/2024'
        },
        {
            id: 3,
            name: 'Wellness Natural Food',
            image: '/images/seller-dashboard/product-detail-3.png',
            orderId: '#126',
            price: '522',
            quantity: 578,
            delivery_date: '12/07/2024'
        },
        {
            id: 4,
            name: 'Dog Food Rachael Ray',
            image: '/images/seller-dashboard/product-detail-1.png',
            orderId: '#582',
            price: '1,481',
            quantity: 36,
            delivery_date: '12/07/2024'
        },
        {
            id: 5,
            name: 'Best Buddy Bits Dog Treats',
            image: '/images/seller-dashboard/product-detail-3.png',
            orderId: '#293',
            price: '648',
            quantity: 84,
            delivery_date: '12/07/2024'
        }
    ];


    const comments = [
        {
            id: 1,
            name: 'Kathryn Murphy',
            avatar: '/images/seller-dashboard/profile.png',
            rating: 4,
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec dolor vel est interdum.',
        },
        {
            id: 2,
            name: 'Leslie Alexander',
            avatar: '/images/seller-dashboard/profile.png',
            rating: 3,
            comment: 'Cras nec viverra justo, a mattis lacus. Vestibulum eleifend, leo sit amet aliquam laoreet, turpis leo vulputate orci.',
        },
        {
            id: 3,
            name: 'Devon Lane',
            avatar: '/images/seller-dashboard/profile.png',
            rating: 5,
            comment: 'Morbi eget commodo diam. Praesent dignissim purus ac turpis porta.',
        },
        {
            id: 4,
            name: 'Eleanor Pena',
            avatar: '/images/seller-dashboard/profile.png',
            rating: 4,
            comment: 'Phasellus et eros ullamcorper, efficitur eros eget, pharetra ante. Sed blandit risus vitae felis fermentum.',
        },
        {
            id: 5,
            name: 'Devon Pena',
            avatar: '/images/seller-dashboard/profile.png',
            rating: 4,
            comment: 'Phasellus et eros ullamcorper, efficitur eros eget, pharetra ante. Sed blandit risus vitae felis fermentum.',
        },
    ];

    const truncateComment = (text, wordLimit) => {
        const words = text.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return text;
    };


    return (
        <div className="bg-mainBgColor py-mainPaddingY px-mainPaddingX">
            <div className="">
                <div className="flex flex-wrap gap-5">
                    <div className="w-[47%] md:max-w-[230px] bg-cardBg py-cardPaddingY px-cardPaddingX shadow-cardShadow border-cardBorderTop rounded-cardBorderRadius flex flex-col flex-grow">
                        <div className="flex justify-around items-center">
                            <img className="w-16" src="/images/seller-dashboard/bar-graph.png" alt="" />
                            <span className="text-xl font-semibold text-gray-600">1000</span>
                        </div>

                        <div className="flex flex-col items-center mt-4">
                            <span className="text-gray-600 font-semibold text-lg">Total Sales</span>
                            <span className="text-xs text-gray-500">+ 0% from last month</span>
                        </div>
                    </div>

                    <div className="w-[47%] md:max-w-[230px] bg-cardBg py-cardPaddingY px-cardPaddingX shadow-cardShadow border-cardBorderTop rounded-cardBorderRadius flex flex-col flex-grow">
                        <div className="flex justify-around items-center">
                            <img className="w-16" src="/images/seller-dashboard/document.png" alt="" />
                            <span className="text-xl font-semibold text-gray-600">100</span>
                        </div>

                        <div className="flex flex-col items-center mt-4">
                            <span className="text-gray-600 font-semibold text-lg">Total Orders</span>
                            <span className="text-xs text-gray-500">+ 0% from last month</span>
                        </div>
                    </div>

                    <div className="w-[47%] md:max-w-[230px] bg-cardBg py-cardPaddingY px-cardPaddingX shadow-cardShadow border-cardBorderTop rounded-cardBorderRadius flex flex-col flex-grow">
                        <div className="flex justify-around items-center">
                            <img className="w-16" src="/images/seller-dashboard/sold.png" alt="" />
                            <span className="text-xl font-semibold text-gray-600">20</span>
                        </div>

                        <div className="flex flex-col items-center mt-4">
                            <span className="text-gray-600 font-semibold text-lg">Product Sold</span>
                            <span className="text-xs text-gray-500">+ 0% from last month</span>
                        </div>
                    </div>

                    <div className="w-[47%] md:max-w-[230px] bg-cardBg py-cardPaddingY px-cardPaddingX shadow-cardShadow border-cardBorderTop rounded-cardBorderRadius flex flex-col flex-grow">
                        <div className="flex justify-around items-center">
                            <img className="w-16" src="/images/seller-dashboard/add-friend.png" alt="" />
                            <span className="text-xl font-semibold text-gray-600">11</span>
                        </div>

                        <div className="flex flex-col items-center mt-4">
                            <span className="text-gray-600 font-semibold text-lg">New Customers</span>
                            <span className="text-xs text-gray-500">+ 0% from last month</span>
                        </div>
                    </div>
                </div>
            </div>



            <div className="flex flex-col lg:flex-row gap-3 flex-wrap mt-5">
                <div className="w-full sm:w-auto overflow-scroll sm:overflow-auto bg-cardBg px-cardPaddingX py-cardPaddingY rounded-2xl shadow-cardShadow border-t-cardBorderTop">
                    <BarChart
                        xAxis={[{ scaleType: 'band', data: ['January', 'February', 'March', 'April', 'May', 'June', 'July'] }]}
                        series={[{ data: [12020, 16792, 18200, 12311, 9272, 18237, 7656] }]}
                        height={300}
                        width={450}
                    />
                </div>

                <div className="w-full sm:w-auto overflow-scroll sm:overflow-auto  bg-cardBg px-cardPaddingX py-cardPaddingY rounded-2xl shadow-cardShadow border-t-cardBorderTop">
                    <LineChart
                        width={450}
                        height={300}
                        series={[
                            { data: newCustomers, label: 'New Customers', area: true, stack: 'total', showMark: false },
                            { data: oldCustomers, label: 'Old Customers', area: true, stack: 'total', showMark: false },
                        ]}
                        xAxis={[{ scaleType: 'point', data: ['January', 'February', 'March', 'April', 'May', 'June', 'July'] }]}
                        sx={{
                            [`& .${lineElementClasses.root}`]: {
                                display: 'none',
                            },
                        }}
                    />
                </div>
            </div>



            <div className="mt-5">
                <div className="w-full sm:w-auto overflow-scroll sm:overflow-auto bg-cardBg px-cardPaddingX py-cardPaddingY rounded-2xl shadow-cardShadow border-t-cardBorderTop">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                        <h2 className="text-xl font-semibold">Product overview</h2>
                        <Link className="text-blue-500 hover:underline">View all</Link>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th className="px-3 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-nowrap">Product ID</th>
                                    <th className="px-3 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                    <th className="px-3 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                                    <th className="px-3 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Sale</th>
                                    <th className="px-3 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                                    <th className="px-3 text-left py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                {products.map((product) => (
                                    <tr key={product.id}>
                                        <td>
                                            <Link className="py-2 whitespace-nowrap flex items-center">
                                                <img src={product.image} alt={product.name} className="w-10 h-10 rounded-full mr-4" />
                                                <span className="truncate text-blue-600 duration-100 hover:scale-105">{product.name}</span>
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">{product.productId}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{product.price}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{product.quantity}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{product.sale}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{product.revenue}</td>
                                        <td className="py-4 whitespace-nowrap">
                                            <span className="flex items-center gap-2">
                                                <ReactStars
                                                    count={5}
                                                    value={product.rating}
                                                    size={16}
                                                    activeColor="#ffd700"
                                                    edit={false}
                                                    isHalf={true}
                                                />
                                                <span className="text-sm text-gray-400">({product.rating})</span>
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>



            <div className="mt-5">
                <div className="bg-cardBg px-cardPaddingX py-cardPaddingY rounded-2xl shadow-cardShadow border-t-cardBorderTop">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                        <h2 className="text-xl font-semibold">Orders</h2>
                        <Link className="text-blue-500 hover:underline">View all</Link>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-nowrap">Order Id</th>
                                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-nowrap">Delivery Date</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                {orders.map((order) => (
                                    <tr key={order.id}>
                                        <td>
                                            <Link className="py-1 whitespace-nowrap flex items-center">
                                                <img src={order.image} alt={order.name} className="w-10 h-10 rounded-full mr-4" />
                                                <span className="truncate text-blue-600 duration-100 hover:scale-105">{order.name}</span>
                                            </Link>
                                        </td>
                                        <td className="px-3 py-4 whitespace-nowrap">{order.orderId}</td>
                                        <td className="px-3 py-4 whitespace-nowrap">{order.price}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{order.delivery_date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>



            <div className="flex flex-col lg:flex-row gap-3 flex-wrap mt-5">
                <div className="w-full sm:w-[49%] bg-cardBg px-cardPaddingX py-cardPaddingY rounded-2xl shadow-cardShadow border-t-cardBorderTop">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                        <h2 className="text-xl font-semibold">Top Products</h2>
                        <Link className="text-blue-500 hover:underline">View all</Link>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 mt-4">
                            <tbody className="divide-y divide-gray-200">
                                {products.map((product) => (
                                    <tr key={product.id} className="flex items-center">
                                        <td className="w-[65%] sm:w-[70%]">
                                            <Link className="py-1 whitespace-nowrap flex items-center">
                                                <img src={product.image} alt={product.name} className="w-10 h-10 rounded-full mr-4" />
                                                <span className="truncate text-blue-600 duration-100 hover:scale-105">{product.name}</span>
                                            </Link>
                                        </td>

                                        <td className="py-4 whitespace-nowrap">
                                            <span className="flex items-center gap-2">
                                                <ReactStars
                                                    count={5}
                                                    value={product.rating}
                                                    size={16}
                                                    activeColor="#ffd700"
                                                    edit={false}
                                                    isHalf={true}
                                                />
                                                <span className="text-sm text-gray-400">({product.rating})</span>
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className="w-full sm:w-[49%] bg-cardBg px-cardPaddingX py-cardPaddingY rounded-2xl shadow-cardShadow border-t-cardBorderTop">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                        <h2 className="text-xl font-semibold">New Comments</h2>
                        <Link className="text-blue-500 hover:underline">View all</Link>
                    </div>

                    <div className="mt-4">
                        {comments.map((comment) => (
                            <div key={comment.id} className="flex items-start mt-3">
                                <img src={comment.avatar} alt={comment.name} className="w-10 h-10 rounded-full mr-4" />

                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <h3 className="">{comment.name}</h3>

                                        <ReactStars
                                            count={5}
                                            value={comment.rating}
                                            size={16}
                                            activeColor="#ffd700"
                                            edit={false}
                                        />
                                    </div>

                                    <p className="text-gray-500 text-sm">
                                        {truncateComment(comment.comment, 9)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerDashboard
