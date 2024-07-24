import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#222222] text-gray-300 pt-8 pb-32 sm:pb-8">
            <div className="container mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                <div>
                    <h3 className="font-semibold text-white mb-3">Popular Categories</h3>
                    <ul className='text-[#7A7A7A] space-y-2'>
                        <li>Fashion</li>
                        <li>Watches</li>
                        <li>Cosmetic</li>
                        <li>Electronic</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-white mb-3">Products</h3>
                    <ul className='text-[#7A7A7A] space-y-2'>
                        <li>Best sales</li>
                        <li>Top Rated</li>
                        <li>New products</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-white mb-3">Our Company</h3>
                    <ul className='text-[#7A7A7A] space-y-2'>
                        <li>Delivery</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Terms & conditions</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-white mb-3">Services</h3>
                    <ul className='text-[#7A7A7A] space-y-2'>
                        <li>Secure payment</li>
                        <li>Best sales</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-white mb-3">Contact</h3>
                    <ul className="space-y-2 text-[#7A7A7A]">
                        <li className="flex items-center"><FaMapMarkerAlt className="mr-2" /> RK Puram, Delhi, India</li>
                        <li className="flex items-center"><FaPhoneAlt className="mr-2" /> +91 999 999 9999</li>
                        <li className="flex items-center"><FaEnvelope className="mr-2" /> support@swiftstore.com</li>
                    </ul>
                    <div className="flex space-x-4 mt-3 text-[#7A7A7A]">
                        <FaInstagram />
                        <FaTwitter />
                        <FaFacebook />
                        <FaLinkedin />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
