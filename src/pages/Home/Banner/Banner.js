import React from 'react';
import bannerlogo from "../../../images/banner-logo.png";
import "./Banner.css"

const Banner = () => {
    return (
        <div>
            {/* top banner section */}
            <div className="lg:flex justify-between mx-8 lg:px-6 border-2 bg-gradient-to-r from-blue-600 to-indigo-100 border-blue-400 rounded-lg">
                <div>
                    <div className="text-white grid justify-items-center text-6xl mt-16 font-extrabold">
                        <h1>HEALTH CARE</h1>
                        <h1 className="text-3xl text-blue-800">&</h1>
                        <h1>DIAGNOSIS CENTER <span className="text-blue-100">LTD.</span></h1>
                    </div>
                    <i className="fas fa-quote-left text-blue-200 mt-12 text-2xl"></i>
                    <p className="text-gray-50 px-8 text-lg">We provide all the essential services for your all important and<br />precious health. Our main first priority is your health. We delivered<br /> the best services and ideal result of your health every time.</p>
                    <button className="contact-btn ml-8 mt-4 bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 rounded-full py-3 px-6 text-white font-medium shadow-md">Contact Us</button>
                </div>
                <img className="lg:w-2/5" src={bannerlogo} alt="" />
            </div>
        </div>
    );
};

export default Banner;