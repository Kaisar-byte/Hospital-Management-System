import React from 'react';
import { Link } from 'react-router-dom';
import { FaHandHoldingMedical } from 'react-icons/fa6';
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-end gap-4 items-center bg-blue-500 text-white pr-6'>
                <div className='flex justify-center items-center gap-2 text-white'>
                    <span><IoCall></IoCall></span>
                    <p>01844224411</p>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <span><MdEmail></MdEmail></span>
                    <p>contact@hospitalMgnSys</p>
                </div>
            </div>
            <div className="py-2">
                <div className='flex justify-between mx-10'>
                    <div className='flex justify-center items-center gap-2'>
                        <p>Kingston</p>
                        <span className='text-blue-500'><FaHandHoldingMedical></FaHandHoldingMedical></span>
                        <p>Hospital</p>
                    </div>
                    <div className='flex justify-center items-center gap-4'>
                        <nav className='flex justify-center gap-6'>
                            <Link to="/">Who we are</Link>
                            <Link to="/">Products</Link>
                            <Link to="/">What we do</Link>
                            <Link to="/">Contact Us</Link>
                        </nav>
                    </div>
                    <div className='flex justify-center gap-4'>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;