import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import "./Appoinment.css"

const Appoinment = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className="container">
            <div className="border-4 border-blue-200 rounded-lg lg:py-16 lg:px-32">
                <h2 className="text-2xl font-semibold text-blue-400 mb-4">Set Appoinments</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="First name" {...register("First name", { required: true, maxLength: 80 })} />
                    <input type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} />
                    <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} value={user.email} />
                    <input type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 7, maxLength: 11 })} />
                    <select {...register("Title", { required: true })}>
                        <option value="Select">Select Doctor</option>
                        <option value="Dr.Alan">Dr. Alan</option>
                        <option value="Dr.Pankaj">Dr. Morgan</option>
                        <option value="Dr.Ajmeri">Dr. Ajmeri</option>
                        <option value="Dr.Hossain">Dr. Hossain</option>
                        <option value="Dr.Mark">Dr. Mark</option>
                        <option value="Dr.Shamuel">Dr. Shamuel</option>
                    </select>
                    <br />
                    <br />
                    <label className="mt-2" for="start">Select Date</label>
                    <input type="date" id="start" name="appoinment"
                        value="2021-10-19"
                        min="2021-01-01" max="2022-12-31" />

                    <input className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 py-2 px-8 rounded-lg text-white shadow-md my-4" type="submit" value="Set Appointment now" />
                </form>
            </div>
        </div>
    );
};

export default Appoinment;