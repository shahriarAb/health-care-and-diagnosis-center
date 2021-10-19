import React from 'react';
import client from "../../../images/client.jpg"

const ClientReview = () => {
    return (
        <div className="grid justify-items-center mt-8 bg-blue-100 py-8 lg:px-32">
            <p className="text-blue-400 text-lg">Testimonials</p>
            <h2 className="text-3xl font-semibold text-gray-700">What Patients Say About us</h2>
            <article className="mt-8 text-center text-lg text-blue-500">Great experience as a first timer. I barely waited to be helped when I checked in. The staff and Dr. X were all very friendly and helpful. I especially loved how Dr. (Name) really took his time to explain my conditions with me as well as my treatment options. I had a great visit and the doctor’s demeanor has really put me at ease so I highly recommend this clinic.</article>
            <img className="mt-6" style={{ border: '4px solid rgb(93, 151, 222)', borderRadius: '50%' }} width="100px" src={client} alt="" />
            <p className="text-blue-600 text-xl font-bold">Norman Osborne</p>
            <small className="text-gray-500 font-bold">CEO, X Enterprize</small>
        </div>
    );
};

export default ClientReview;