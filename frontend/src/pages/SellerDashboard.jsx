import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { BarChart } from '@mui/x-charts/BarChart'
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart'

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
                        width={460}
                    />
                </div>

                <div className="w-full sm:w-auto overflow-scroll sm:overflow-auto  bg-cardBg px-cardPaddingX py-cardPaddingY rounded-2xl shadow-cardShadow border-t-cardBorderTop">
                    <LineChart
                        width={460}
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
        </div>
    )
}

export default SellerDashboard
