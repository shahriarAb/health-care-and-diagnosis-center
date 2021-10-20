import React from 'react';

const Feedback = () => {
    return (
        <div>
            {/* feedback/opinion giving section */}
            <div className="text-center mt-6 mx-2 p-6 border-2 bg-gradient-to-r from-blue-300 to-blue-100 border-blue-400 rounded-lg">
                <p className="text-blue-500 text-lg">Feedback Hub</p>
                <h2 className="text-3xl font-bold">Give your feedback</h2>
                <p className="mt-8 text-2xl font-bold text-blue-700">Your opinion matters</p>
                <p className="mt-4">Email us your important opinion. So that, we can impove our services.</p>
                <textarea
                    className="mt-12 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent border-2 shadow-inner shadow-mg rounded-md lg:w-1/2 sm:w-3/5 p-2"
                    placeholder='Write here and help us to improve our service.' />
                <br />
                <button
                    className="contact-btn bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 rounded-full py-2 px-6 text-white font-semibold shadow-md mt-4 mb-12"
                >Send Mail</button>
            </div>
        </div>
    );
};

export default Feedback;