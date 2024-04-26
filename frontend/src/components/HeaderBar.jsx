// HeaderBar component for small screens only

import { CiSearch } from 'react-icons/ci'

function HeaderBar() {
    return (
        <div className='sm:hidden pt-7'>
            <h1 className="text-center text-3xl font-extrabold text-[#1d3f35]">SwiftStore</h1>
            
            <form className="flex justify-between gap-2 mx-5 mt-5 p-2 border border-gray-300 rounded-lg">
                <input type="text" placeholder='Search for products...' className='w-full text-[#222E50] focus:outline-none'/>
                
                <button>
                    <CiSearch className='w-10 text-[#222E50] size-6'/>
                </button>
            </form>
        </div>
    )
}

export default HeaderBar
