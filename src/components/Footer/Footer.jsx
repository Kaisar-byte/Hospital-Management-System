import React from 'react';
import { FaHandHoldingMedical } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { SiSimilarweb } from "react-icons/si";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='my-20 flex justify-around'>
            <div className='flex justify-center items-start gap-2'>
                <p>Kingston</p>
                <span className='text-blue-500'><FaHandHoldingMedical></FaHandHoldingMedical></span>
                <p>Hospital</p>
            </div>
            <div className='flex flex-col space-y-1'>
                <h2 className='text-lg font-semibold'>Important Links</h2>
                <Link>What We Serve</Link>
                <Link>Products</Link>
                <Link>What We Do</Link>
            </div>
            <div className='flex flex-col space-y-1'>
                <h2 className='text-lg font-semibold'>Important Links</h2>
                <Link>What We Serve</Link>
                <Link>Products</Link>
                <Link>What We Do</Link>
            </div>
            <div className='flex flex-col space-y-1'>
                <h2 className='text-lg font-semibold'>Get in Touch</h2>
                <div className='flex justify-start items-center gap-2'>
                    <span><IoIosCall></IoIosCall></span><p>8801710022412</p>
                </div>
                <div className='flex justify-start items-center gap-2'>
                    <span><IoIosCall></IoIosCall></span><p>0312451201</p>
                </div>
                <div className='flex justify-start items-center gap-2'>
                    <span><MdEmail></MdEmail></span><p>contact@kingstone.hospital.com</p>
                </div>
                <div className='flex justify-start items-center gap-2'>
                    <span><SiSimilarweb></SiSimilarweb></span><p>www.kingstonehospital.com</p>
                </div>
                <div className='flex justify-start items-center gap-2'>
                    <span><FaMapMarkerAlt></FaMapMarkerAlt></span><p>241 Uttara Road#20, Dhaka-1206</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;