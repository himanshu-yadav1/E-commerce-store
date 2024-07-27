import { Link } from "react-router-dom"

function Hero_Section() {
    return (
        <>
            <div className='flex flex-col sm:flex-row p-5 sm:p-0 pb-0 rounded-md bg-gradient-to-br from-[#e2f9ed] to-[#1D7B65]'>
                <div className="flex flex-col sm:w-[55%] sm:p-5 md:p-20">
                    <div>
                        <h2 className="text-2xl sm:text-3xl sm:mt-10 uppercase text-center sm:text-start md:text-center font-semibold sm:text-[#1e4e40]">Discover Endless Shopping Possibilities</h2>
                        
                        <p className="font-mono md:pl-11 mt-8 sm:mt-14 text-center sm:text-start">Explore a world of endless options with us. From fashion essentials to the latest gadgets, find everything you need right here.</p>
                    </div>
                    
                    <div className="hidden sm:flex justify-center py-5">
                        <Link to={'/search'} className=" bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 hover:scale-105 cursor-pointer transition">
                            Shop Now
                        </Link>
                    </div>
                </div>

                <div className="flex mt-5 md:mt-0">
                    <img width='500' src="images/male-checking-his-phone.png" alt=""/>
                </div>
            </div> 
        </>
    )
}

export default Hero_Section
