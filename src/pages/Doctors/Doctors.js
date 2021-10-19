import React from 'react';
import { Link } from 'react-router-dom';
import doctor1 from "../../images/doctor-1.jpg";
import doctor2 from "../../images/doctor-2.jpg";
import doctor3 from "../../images/doctor-3.jpg";
import doctor4 from "../../images/doctor-4.jpg";
import doctor5 from "../../images/doctor-5.jpg";
import doctor6 from "../../images/doctor-6.jpg";

const Doctors = () => {
    return (
        <>
            <h2 className="text-center text-lg font-semibold text-blue-300 mt-8">MEET OUR EXPERIENTS DOCTORS</h2>
            <h3 className="text-center text-3xl font-semibold text-blue-500 mb-16">We Are Experts In Our Field</h3>
            <div className="lg:grid lg:grid-cols-3 gap-8 mx-12">
                <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 mb-4">
                    <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={doctor1} alt="" width="384" height="512" />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <figcaption>
                            <div className="text-cyan-600">
                                <h2 className="text-blue-500 text-2xl font-semibold">Dr. Alan</h2>
                            </div>
                            <div className="text-gray-400">
                                <i>Medicine Professor and Surgeon</i>
                            </div>
                            <br />
                            <Link className="border-2 border-blue-600 bg-blue-600 text-white hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 py-2 px-2 rounded-lg text-white shadow-md my-2" to="/appoinments" >Appointments</Link>
                        </figcaption>
                    </div>
                </figure>
                <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 mb-4">
                    <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={doctor2} alt="" width="384" height="512" />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <figcaption className="font-medium">
                            <div>
                                <h2 className="text-blue-500 text-2xl font-semibold">Dr. Ajmeri</h2>
                            </div>
                            <div className="text-gray-400">
                                <i>Gynecologist & Surgeon</i>
                            </div>
                            <br />
                            <Link className="border-2 border-blue-600 bg-blue-600 text-white hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 py-2 px-2 rounded-lg text-white shadow-md my-2" to="/appoinments" >Appointments</Link>
                        </figcaption>
                    </div>
                </figure>
                <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 mb-4">
                    <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={doctor3} alt="" width="384" height="512" />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <figcaption className="font-medium">
                            <div>
                                <h2 className="text-blue-500 text-2xl font-semibold">Dr. Morgan</h2>
                            </div>
                            <div className="text-gray-400">
                                <i>Cardiologist & Surgeon</i>
                            </div>
                            <br />
                            <Link className="border-2 border-blue-600 bg-blue-600 text-white hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 py-2 px-2 rounded-lg text-white shadow-md my-2" to="/appoinments" >Appointments</Link>
                        </figcaption>
                    </div>
                </figure>
                <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 mb-4">
                    <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={doctor4} alt="" width="384" height="512" />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <figcaption className="font-medium">
                            <div>
                                <h2 className="text-blue-500 text-2xl font-semibold">Dr. Hossain</h2>
                            </div>
                            <div className="text-gray-400">
                                <i>Neurologist & Surgeon</i>
                            </div>
                            <br />
                            <Link className="border-2 border-blue-600 bg-blue-600 text-white hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 py-2 px-2 rounded-lg text-white shadow-md my-2" to="/appoinments" >Appointments</Link>
                        </figcaption>
                    </div>
                </figure>
                <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 mb-4">
                    <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={doctor5} alt="" width="384" height="512" />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <figcaption className="font-medium">
                            <div>
                                <h2 className="text-blue-500 text-2xl font-semibold">Dr. Mark</h2>
                            </div>
                            <div className="text-gray-400">
                                <i>Dentist</i>
                            </div>
                            <br />
                            <Link className="border-2 border-blue-600 bg-blue-600 text-white hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 py-2 px-2 rounded-lg text-white shadow-md my-2" to="/appoinments" >Appointments</Link>
                        </figcaption>
                    </div>
                </figure>
                <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 mb-4">
                    <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={doctor6} alt="" width="384" height="512" />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <figcaption className="font-medium">
                            <div>
                                <h2 className="text-blue-500 text-2xl font-semibold">Dr. Shamuel</h2>
                            </div>
                            <div className="text-gray-400">
                                <i>ENT Specialist & Surgeon</i>
                            </div>
                            <br />
                            <Link className="border-2 border-blue-600 bg-blue-600 text-white hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 py-2 px-2 rounded-lg text-white shadow-md my-2" to="/appoinments" >Appointments</Link>
                        </figcaption>
                    </div>
                </figure>
            </div>
        </>
    );
};

export default Doctors;