import React from 'react'
import Footer from '../../components/user/Footer';
import HeaderBar from '../../components/user/HeaderBar';

function ContactUs() {
    return (
        <div>
            <div className=' bg-gradient-to-r from-white to-violet-100'>
                <HeaderBar />

                <div className="mx-auto mb-10 p-8 flex flex-col gap-6 lg:flex-row items-center lg:items-start lg:justify-between">
                    <div className="lg:w-[65%] p-4">
                        <div className='md:w-[50%] mb-4'>
                            <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
                            <p className="mb-2 text-gray-700 leading-5">Email, call, or complete the form to learn how SwiftStore can solve your messaging problem.</p>
                            <p className="mb-2 text-gray-700">info@swiftstore.io</p>
                            <p className="text-gray-700">+91 987654321</p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-5 mt-8">
                            <div className="md:w-1/3">
                                <h3 className="text-lg font-semibold mb-2">Customer Support</h3>
                                <p className='text-gray-700 '>Our support team is available around the clock to address any concerns or queries you may have.</p>
                            </div>
                            <div className="md:w-1/3">
                                <h3 className="text-lg font-semibold mb-2">Feedback and Suggestions</h3>
                                <p className='text-gray-700'>We value your feedback and are continuously working to improve SwiftStore.</p>
                            </div>
                            <div className="md:w-1/3">
                                <h3 className="text-lg font-semibold mb-2">Media Inquiries</h3>
                                <p className='text-gray-700'>For media-related questions or press inquiries, please contact us at media@swiftstore.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-[35%] p-4 bg-white shadow-lg rounded-xl mt-8 lg:mt-0 border-t">
                        <h2 className="text-2xl font-semibold">Get in Touch</h2>
                        <p className="mb-4 text-gray-500">You can reach us anytime</p>
                        <div>
                            <div className="flex flex-col gap-3">
                                <div className='flex gap-4'>
                                    <input type="text" placeholder="First name" className="border border-slate-300 p-2 rounded-xl focus:outline-none w-1/2" />
                                    <input type="text" placeholder="Last name" className="border border-slate-300 p-2 rounded-xl focus:outline-none w-1/2" />
                                </div>
                                <input type="email" placeholder="Your email" className="border border-slate-300 p-2 rounded-xl focus:outline-none" />
                                <input type="tel" placeholder="Phone number" className="border border-slate-300 p-2 rounded-xl focus:outline-none" />
                                <textarea placeholder="How can we help?" className="border border-slate-300 p-2 rounded-xl h-24 focus:outline-none"></textarea>
                            </div>

                            <button className="bg-violet-900 text-white p-2 rounded-xl w-full mt-4">Submit</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="p-8 mt-5">
                <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
                    <div className="md:w-1/2 p-4">
                        <img src="images/location.png" alt="Map" className="w-full rounded-lg" />
                    </div>
                    <div className="md:w-1/2 p-4">
                        <h2 className="font-semibold text-gray-500">Our Location</h2>
                        <p className="mb-3 md:mb-4 text-xl md:text-3xl font-semibold">Connecting Near and Far</p>
                        <p className="mb-2 font-semibold">Headquarters</p>
                        <p className="text-gray-700">SwiftStore Inc.</p>
                        <p className="text-gray-700">Suite Street, RK Puram</p>
                        <p className="text-gray-700">New Delhi, 110022</p>
                        <p className="text-gray-700">India</p>
                    </div>
                </div>
            </div>
            

            <div>
                <Footer />
            </div>
        </div>
    );
}

export default ContactUs