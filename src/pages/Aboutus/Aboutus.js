import React from 'react';
import { Link } from 'react-router-dom';
import "./Aboutus.css";

const Aboutus = () => {
    return (
        <div>
            {/* why you should choose us section */}
            <div className="mx-16">
                <h2 className="text-lg font-semibold text-gray-700 mt-8"><i>Why Choose us?</i></h2>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Reasons That You Should Contact Us</h3>
                <div className="lg:flex">
                    <h1 className="text-blue-900 text-7xl font-bold"><i>1</i></h1>
                    <div className="mt-4 ml-8">
                        <h4 className="text-blue-700 text-xl font-semibold">Over 20 years of experience</h4>
                        <p className="text-lg ml-4 text-gray-600"><i>"We have 20 years of successfull experience. We always try to give the best service from the beginning</i></p>
                    </div>
                </div>
                <div className="lg:flex lg:ml-10 mt-2">
                    <h1 className="text-blue-900 text-7xl font-bold"><i>2</i></h1>
                    <div className="mt-4 ml-8">
                        <h4 className="text-blue-700 text-xl font-semibold">We have experienced Doctor's</h4>
                        <p className="text-lg ml-4 text-gray-600"><i>"We give you the experienced and well trained Doctors. Doctors are very helpfull and always try to motivate patient.</i></p>
                    </div>
                </div>
                <div className="lg:flex lg:ml-20 mt-2">
                    <h1 className="text-blue-900 text-7xl font-bold"><i>3</i></h1>
                    <div className="mt-4 ml-8">
                        <h4 className="text-blue-700 text-xl font-semibold">We are improving everyday</h4>
                        <p className="text-lg ml-4 text-gray-600"><i>"From the beginning we improves our services day by day. You are always welcome to give your all important opinion and elp us to improve more. Feel always free to let us know. Go to feedback hub on <Link to="/home"></Link> and give your counsel.</i></p>
                    </div>
                </div>
                <div className="lg:flex lg:ml-32">
                    <h1 className="text-blue-900 text-7xl font-bold"><i>4</i></h1>
                    <div className="mt-4 ml-8">
                        <h4 className="text-blue-700 text-xl font-semibold">Accurate Lab Results</h4>
                        <p className="text-lg ml-4 text-gray-600"><i>"We always try to give you the best diagnosis/test results. We have world class machines and lab experts which are very helpfull to give you best result always.</i></p>
                    </div>
                </div>
            </div>

            <h2 className="text-center text-lg font-semibold text-blue-300 mt-16">WE CARE ABOUT PATIENT</h2>
            <h3 className="text-center text-2xl font-semibold text-blue-600 mb-8">OUR OUTSTANDING SERVICES</h3>
            <div className="grid lg:grid-cols-3 gap-8 mx-8">
                <div className="lg:flex service-icon">
                    <div className="text-6xl text-blue-800"><i className="fas fa-stethoscope"></i></div>
                    <div className="ml-6">
                        <h2 className="text-2xl font-semibold text-blue-500">Outdoor Checkup</h2>
                        <p className="text-gray-400">There is an outdoor treatment zone or section in Vijetha Hospital for regular health checkups of different disease. From dentist to paediatrician, eye-specialist to cardio expert to physician –all the famous doctors systematically visit routine-wise to provide affordable health treatment to the mass people. </p>
                    </div>
                </div>
                <div className="lg:flex service-icon">
                    <div className="text-6xl text-blue-800"><i className="fas fa-ambulance"></i></div>
                    <div className="ml-6">
                        <h2 className="text-2xl font-semibold text-blue-500">Emmergency Care</h2>
                        <p className="text-gray-400">In most places, the EMS can be summoned by members of the public (as well as medical facilities, other emergency services, businesses and authorities) via an emergency telephone number which puts them in contact with a control facility, which will then dispatch a suitable resource for the situation.</p>
                    </div>
                </div>
                <div className="lg:flex service-icon">
                    <div className="text-6xl text-blue-800"><i className="far fa-credit-card"></i></div>
                    <div className="ml-6">
                        <h2 className="text-2xl font-semibold text-blue-500">Operation Theater Service</h2>
                        <p className="text-gray-400">Of the Eighteen operation theatres thirteen have the stainless steel system with latest laminar flow an exhaust system. Day care surgeries are managed in the ground floor O.T. There are four minor operation theaters – two in the surgical outpatient department block one in the labor room and one in casualty to cater.</p>
                    </div>
                </div>
                <div className="lg:flex service-icon">
                    <div className="text-6xl text-blue-800"><i className="fas fa-map-marker"></i></div>
                    <div className="ml-6">
                        <h2 className="text-2xl font-semibold text-blue-500">Blood Test</h2>
                        <p className="text-gray-400">A blood test usually involves the phlebotomist taking a blood sample from a blood vessel in your arm. and the usual place for a sample is the inside of the elbow or wrist, where the veins are relatively close to the surface. Blood samples from children are most commonly taken from the back of the hand.</p>
                    </div>
                </div>
                <div className="lg:flex service-icon">
                    <div className="text-6xl text-blue-800"><i className="fas fa-pills"></i></div>
                    <div className="ml-6">
                        <h2 className="text-2xl font-semibold text-blue-500">24/7 Pharmacy Support</h2>
                        <p className="text-gray-400">We are here to support Australian pharmacists, pharmacy interns and students by providing a team of volunteer pharmacists trained in peer support and telephone counselling ready to take your calls.Not a pharmacist and seeking medicines information? Go to NPS MedicineWise or ask your local pharmacist.</p>
                    </div>
                </div>
                <div className="lg:flex service-icon">
                    <div className="text-6xl text-blue-800"><i className="fas fa-phone-square"></i></div>
                    <div className="ml-6">
                        <h2 className="text-2xl font-semibold text-blue-500">24/7 Telephone Service</h2>
                        <p className="text-gray-400">You always can get online services via telephone from anywhere anytime from us. We always care about out patients.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;