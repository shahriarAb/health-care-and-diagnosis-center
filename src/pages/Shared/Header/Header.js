import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css";
import useAuth from "../../hooks/useAuth";

const Header = () => {
    const { user, signingOut } = useAuth();

    const activeStyle = {
        fontWeight: "bold",
        color: "rgb(59,130,246)",
        textDecoration: "underline",
        backgronoundColor: "whitesmoke"
    }
    return (
        <div className="bg-gradient-to-r from-gray-600 to-gray-900 mb-4 py-2 text-gray-200 flex justify-between">
            <Link to="/" className="flex items-center ml-16">
                <div className="text-5xl text-blue-300">
                    <i className="fas fa-hospital-user"></i>
                </div>
                <div className="ml-2">
                    <h2 className="text-2xl font-bold ml-4 text-blue-100">Health Care &</h2>
                    <h2 className="text-xl font-bold text-blue-100">Diagnostic Center LTD.</h2>
                </div>
            </Link>
            <div className="text-right p-4">
                <nav>
                    <label id="icon">
                        <i className="fas fa-bars"></i>
                    </label>
                    <ul>
                        <li>
                            <NavLink className="hover:bg-gray-300 p-2 hover:text-gray-900 rounded-lg" to="/home" activeStyle={activeStyle}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="hover:bg-gray-300 p-2 hover:text-gray-900 rounded-lg" to="/services" activeStyle={activeStyle}>Services</NavLink>
                        </li>
                        <li>
                            <NavLink className="hover:bg-gray-300 p-2 hover:text-gray-900 rounded-lg" to="/appoinments" activeStyle={activeStyle}>Appoinment</NavLink>
                        </li>
                        <li>
                            <NavLink className="hover:bg-gray-300 p-2 hover:text-gray-900 rounded-lg" to="/doctors" activeStyle={activeStyle}>Our Doctors</NavLink>
                        </li>
                        <li><NavLink className="hover:bg-gray-300 p-2 hover:text-gray-900 rounded-lg" to="/aboutus" activeStyle={activeStyle}>About Us</NavLink></li>
                        <li>
                            {user.email ?
                                <small>
                                    <span>Hey, {user.displayName}</span>
                                    <button onClick={signingOut} className="bg-gray-600 hover:bg-gray-300 p-2 hover:text-gray-900 rounded-lg ml-2" to="/login">Logout <i className="fas fa-sign-out-alt"></i></button>
                                </small>
                                :
                                <NavLink className="bg-blue-600 hover:bg-blue-300 px-4 py-2 hover:text-gray-900 rounded-lg" to="/login">Login <i className="fas fa-sign-in-alt"></i></NavLink>
                            }
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;