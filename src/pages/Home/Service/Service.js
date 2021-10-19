import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, name, img, description } = props.service;
    return (
        <div className="border-2 rounded-r-xl rounded-bl-lg border-blue-300 border-opacity-75 mb-4">
            <img className="w-full rounded-tr-xl" src={img} alt="" />
            <div className="m-2">
                <h2 className="text-center my-2 text-blue-500 text-2xl font-semibold">{name}</h2>
                <p className="text-gray-600">{description.slice(0, 190)}...</p>
                <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 py-2 px-8 rounded-lg text-white shadow-md my-2">
                    <Link to={`/servicedetails/${id}`}>More Details</Link>
                </button>
            </div>
        </div>
    );
};

export default Service;