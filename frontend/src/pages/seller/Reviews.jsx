import ReactStars from 'react-rating-stars-component';
import { FaStar } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";

function Reviews() {
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
            rating: 3,
            comment: 'Phasellus et eros ullamcorper, efficitur eros eget, pharetra ante. Sed blandit risus vitae felis fermentum.',
        },
        {
            id: 6,
            name: 'Cssdf Penssa',
            avatar: '/images/seller-dashboard/profile.png',
            rating: 3,
            comment: 'Phasdfs etsdf eros ulsdfamcorper, efficitur eros egesdft, pharsfdtra  risus visdfmen fdsdftum.',
        },
        {
            id: 7,
            name: 'Devon Jdgsf',
            avatar: '/images/seller-dashboard/profile.png',
            rating: 5,
            comment: 'Phasorper, efficitur eros eget, pharetra ante. Sed bla Lornf sesdf ctsdf sfdetur.felis fermentum.',
        },
        {
            id: 8,
            name: 'Devon Pena',
            avatar: '/images/seller-dashboard/profile.png',
            rating: 2,
            comment: 'Sed blandit risd ullamcorper, efficitur eros eget, pharetra ante. sus vitae felis fermentum.',
        },
        {
            id: 9,
            name: 'dolor Pena',
            avatar: '/images/seller-dashboard/profile.png',
            rating: 4.5,
            comment: 'Lorem ipsum dolor sit amet haretra ante. Sed blan Lorem, ipsum dolor ermentum.',
        },
        {
            id: 10,
            name: 'Devon Lorem',
            avatar: '/images/seller-dashboard/profile.png',
            rating: 1,
            comment: 'Phasellus et ersdf sadf Sed blandit risus sdf sdff ermentum.',
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
            <div className="flex flex-wrap gap-5">
                <div className="w-[46%] md:max-w-[24%] bg-cardBg px-cardPaddingX shadow-cardShadow border-cardBorderTop rounded-cardBorderRadius flex flex-col flex-grow">
                    <div className="flex justify-around items-center">
                        <img className="w-16" src="/images/seller-dashboard/group.png" alt="" />
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="text-gray-700 font-semibold text-2xl sm:text-4xl">480</span>
                        <span className="text-gray-500">Total Reviews</span>
                    </div>
                </div>

                <div className="w-[46%] md:max-w-[24%] bg-cardBg px-cardPaddingX shadow-cardShadow border-cardBorderTop rounded-cardBorderRadius flex flex-col flex-grow">
                    <div className="flex justify-around items-center mt-2">
                        <ReactStars
                            count={5}
                            value={4.5}
                            size={26}
                            activeColor="#ffd700"
                            edit={false}
                            isHalf={true}
                        />
                    </div>

                    <div className="flex flex-col items-center mt-4">
                        <span className="text-gray-700 font-semibold text-2xl sm:text-4xl">4.5</span>
                        <span className="text-gray-500">Average Reviews</span>
                    </div>
                </div>

                <div className="w-[100%] lg:max-w-[46%] bg-cardBg py-cardPaddingY px-cardPaddingX shadow-cardShadow border-cardBorderTop rounded-cardBorderRadius flex flex-col flex-grow">
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <span>5</span>
                            <span className='text-[#FFD700] text-sm'>
                                <FaStar />
                            </span>
                        </div>

                        <div className='w-[70%]'>
                            <ProgressBar
                                completed={31}
                                customLabel=" "
                                bgColor="#FFD700"
                                height="8px"
                            />
                        </div>

                        <div>
                            <span className='text-gray-600'>31 %</span>
                        </div>
                    </div>


                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <span>4</span>
                            <span className='text-[#FFD700] text-sm'>
                                <FaStar />
                            </span>
                        </div>

                        <div className='w-[70%]'>
                            <ProgressBar
                                completed={43}
                                customLabel=" "
                                bgColor="#FFD700"
                                height="8px"
                            />
                        </div>

                        <div>
                            <span className='text-gray-600'>43 %</span>
                        </div>
                    </div>


                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <span>3</span>
                            <span className='text-[#FFD700] text-sm'>
                                <FaStar />
                            </span>
                        </div>

                        <div className='w-[70%]'>
                            <ProgressBar
                                completed={19}
                                customLabel=" "
                                bgColor="#FFD700"
                                height="8px"
                            />
                        </div>

                        <div>
                            <span className='text-gray-600'>19 %</span>
                        </div>
                    </div>


                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <span>2</span>
                            <span className='text-[#FFD700] text-sm'>
                                <FaStar />
                            </span>
                        </div>

                        <div className='w-[70%]'>
                            <ProgressBar
                                completed={0}
                                customLabel=" "
                                bgColor="#FFD700"
                                height="8px"
                            />
                        </div>

                        <div>
                            <span className='text-gray-600'>0 %</span>
                        </div>
                    </div>


                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <span>1</span>
                            <span className='text-[#FFD700] text-sm'>
                                <FaStar />
                            </span>
                        </div>

                        <div className='w-[70%]'>
                            <ProgressBar
                                completed={7}
                                customLabel=" "
                                bgColor="#FFD700"
                                height="8px"
                            />
                        </div>

                        <div>
                            <span className='text-gray-600'>7 %</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-4 bg-cardBg px-cardPaddingX py-cardPaddingY rounded-2xl shadow-cardShadow border-t-cardBorderTop">
                <div className="flex justify-between items-center md:pb-4 md:border-b md:border-gray-200">
                    <h2 className="text-xl font-semibold">Reviews</h2>
                </div>

                <div>
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
                                    {truncateComment(comment.comment, 15)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Reviews
