import React from 'react';

const Footer = () => {
    return (
        <div className="absolute bottom-0 bg-gray-900 w-full text-center pt-6 pb-2 text-gray-200">
            <div className="mb-10">
                <p>Our first priority is your precious health. Always be connected with us.</p>
                <div className="text-2xl">
                    <i className="fab fa-facebook-square mr-4"></i>
                    <i className="fab fa-linkedin mr-4"></i>
                    <i className="fab fa-twitter-square mr-4"></i>
                    <i className="fab fa-instagram mr-4"></i>
                    <i className="fab fa-youtube"></i>
                </div>
                <p className="mt-4">@ any need: +000-111-222-333, 010-1234567, +880-12224-56789</p>
            </div>
            <small>Copyright &copy; 2021 health care & diagnosis center LTD. All right reserved. Presented by shahriarAb.</small>
        </div>
    );
};

export default Footer;