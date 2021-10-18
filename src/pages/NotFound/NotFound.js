import React from 'react';
import { Link } from 'react-router-dom';
import notfound from "../../images/404.png";

const NotFound = () => {
    return (
        <div className="relative">
            <img className="mx-auto w-2/3" src={notfound} alt="" />
            <h2 className="absolute left-1/2 text-3xl text-blue-500 font-bold bottom-28">Nothing found!</h2>
            <div className="absolute left-1/3 bottom-12">
                <Link className="bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800-600 focus:ring-opacity-50 py-2 px-6 rounded-lg text-black font-semibold shadow-md my-2" onClick={() => window.history.back()}>Back</Link>
                <Link className="bg-blue-600 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 py-2 px-6 rounded-md text-white font-semibold shadow-md my-2 ml-72" to="/home">Home</Link>
            </div>
        </div>
    );
};

export default NotFound;