import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const HomeServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className="my-12 grid justify-items-center">
            <h2 className="text-lg font-semibold text-blue-400">Our Mentionable Services</h2>
            <div className="mt-8 mx-8 lg:grid lg:grid-cols-3 gap-8">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
            <Link className="mt-6 underline text-xl font-semibold text-blue-600" to="/services">More services...</Link>
        </div>
    );
};

export default HomeServices;