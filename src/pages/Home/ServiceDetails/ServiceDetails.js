import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    const { id } = useParams();
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    const singleDetails = services.find(service => parseInt(id) === service.id);
    return (
        <div className="flex justify-center">
            <div className="grid justify-items-center lg:w-1/2 border-4 rounded-xl border-blue-200 border-opacity-100">
                <img className="w-full rounded-md" src={singleDetails?.img} alt="" />
                <h2 className="my-4 text-3xl font-bold text-blue-500">{singleDetails?.name}</h2>
                <p className="px-4 text-center text-gray-600">{singleDetails?.description}</p>
                <div className="my-6">
                    <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 py-2 px-8 rounded-lg text-white shadow-md my-2 mr-6">Book {singleDetails?.name}</button>
                    <button className="border-2 border-blue-600 bg-blue-600 text-white hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 py-2 px-8 rounded-lg text-white shadow-md my-2 ml-6"><Link to="/">Home</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;