import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="absolute bottom-0 bg-gray-900 w-full text-center pt-6 pb-2 text-gray-200">
            <div className="mb-8">
                <p>Our first priority is your precious health. Always be connected with us.</p>
                <div className="text-2xl">
                    <a href="https://www.fb.com"><i className="fab fa-facebook-square hover:text-gray-400 mr-4"></i></a>
                    <a href="https://www.linkedin.com"><i className="fab fa-linkedin hover:text-gray-400 mr-4"></i></a>
                    <a href="https://www.twitter.com"><i className="fab fa-twitter-square hover:text-gray-400 mr-4"></i></a>
                    <a href="https://www.instagram.com"><i className="fab fa-instagram hover:text-gray-400 mr-4"></i></a>
                    <a href="https://www.youtube.com"><i className="fab fa-youtube hover:text-gray-400"></i></a>
                </div>
                <p className="mt-2">@ any need: +000-111-222-333, 010-1234567, +880-12224-56789</p>
            </div>
            <small>Copyright &copy; 2021 health care & diagnosis center LTD. All right reserved. Presented by shahriarAb.</small>
        </div>
    );
};

export default Footer;