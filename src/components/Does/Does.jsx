import React from 'react';
import onsite from "../../assets/images/what-we-do/onsite.jpg";
import repair from "../../assets/images/what-we-do/repair.jpg";
import safety from "../../assets/images/what-we-do/safety.jpg";
import sales from "../../assets/images/what-we-do/sales.jpg";


const Does = () => {

    return (
        <div className="">
            <h2 className='text-4xl text-center uppercase font-bold py-10'>What We Do</h2>
            <div>
                <div className='grid grid-cols-2 '>
                    <div className="flex ">
                        <div className="w-1/2">
                            <img src={onsite} className="w-full h-52" alt="" />
                        </div>
                        <div className="w-1/2 flex flex-col justify-center items-center gap-3  bg-gray-400 text-white">
                            <h2 className="text-xl font-semibold ">ON-SITE MAINTENANCE</h2>
                            <p className='text-xs px-4 text-center'>Authorized service by certified technicians who can repair a wide range of medical equipment.</p>
                        </div>
                    </div>
                    <div className="flex ">
                        <div className="w-1/2">
                            <img src={sales} className="w-full h-52" alt="" />
                        </div>
                        <div className="w-1/2 flex flex-col justify-center items-center gap-3  bg-gray-400 text-white">
                            <h2 className="text-xl font-semibold">SALES & RENTALS</h2>
                            <p className='text-sm px-4 text-center'>Authorized service by certified technicians who can repair a wide range of medical equipment. </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="flex flex-row-reverse ">
                        <div className="w-1/2">
                            <img src={repair} className="w-full h-52 " alt="" />
                        </div>
                        <div className="w-1/2 flex flex-col justify-center items-center gap-3 bg-gray-400 text-white">
                            <h2 className="text-xl font-semibold">DEPOT REPAIR</h2>
                            <p className='text-sm px-4 text-center'>Authorized service by certified technicians who can repair a wide range of medical equipment.</p>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse">
                        <div className="w-1/2">
                            <img src={safety} className="w-full h-52" alt="" />
                        </div>
                        <div className="w-1/2 flex flex-col justify-center items-center gap-3  bg-gray-400 text-white">
                            <h2 className="text-xl font-semibold">ELECTRICAL SAFETY</h2>
                            <p className='text-sm px-4 text-center'>Authorized service by certified technicians who can repair a wide range of medical equipment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Does;