import React, { useEffect, useState } from 'react';
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
            <div className="mt-8 mx-8 grid grid-cols-3 gap-8">
                {
                    services.map(service => <Service
                        key="id"
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default HomeServices;