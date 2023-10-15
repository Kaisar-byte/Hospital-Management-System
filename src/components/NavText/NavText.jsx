import React from 'react';
import { FaBriefcaseMedical } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ScrollableImg from '../ScrollableImg/ScrollableImg';


const NavText = () => {
    return (
        <div className='h-screen bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800'>
            <div className="mx-auto py-2">
                <h2 className='text-4xl text-center text-orange-600 py-6 font-semibold'>A specialized medical software can be...</h2>
                <div className="flex flex-col gap-2 w-80 mx-auto py-2">
                    <Link className="flex justify-start items-center gap-6 text-2xl font-semibold">
                        <FaBriefcaseMedical className="text-blue-600"></FaBriefcaseMedical>
                        <span>Specialist Doctors</span>
                    </Link>
                    <Link className="flex justify-start items-center gap-6 text-2xl font-semibold">
                        <FaBriefcaseMedical className="text-blue-600"></FaBriefcaseMedical>
                        <span>Modernised Pathology</span>
                    </Link>
                    <Link className="flex justify-start items-center gap-6 text-2xl font-semibold">
                        <FaBriefcaseMedical className="text-blue-600"></FaBriefcaseMedical>
                        <span>Friendly Dental Service</span>
                    </Link>
                    <Link className="flex justify-start items-center gap-6 text-2xl font-semibold">
                        <FaBriefcaseMedical className="text-blue-600"></FaBriefcaseMedical>
                        <span>ICU</span>
                    </Link>
                    <Link className="text-center bg-blue-500 rounded-full mx-24 text-white py-2 text-md">Contact Us</Link>
                </div>
            </div>
            <ScrollableImg></ScrollableImg>
        </div >
    );
};

export default NavText;