import React from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { BsCapsule } from 'react-icons/bs';
import { GiMedicalThermometer } from 'react-icons/gi';
import Serve from './Serve';

const WhoServe = () => {
    const serves = [
        {
            serveId: 1,
            serveHeading: "BIOMEDICAL (HTM)",
            serveIcon: <AiFillSetting></AiFillSetting>,
            serveText: "We provide reliable, honest repair services ranging from simple preventative maintenance and troubleshooting, to more complicated component level and software related issues"
        },
        {
            serveId: 2,
            serveHeading: "HOME PHARMACY",
            serveIcon: <BsCapsule></BsCapsule>,
            serveText: "We provide pharmacists a comprehensive service that includes regular PM service, repair programs, and rental options to ensure every patient has a safe and effective home infusion device"
        },
        {
            serveId: 3,
            serveHeading: "SURGERY CENTERS",
            serveIcon: <GiMedicalThermometer></GiMedicalThermometer>,
            serveText: "We provide complete maintenance programs and equipment repair services that keep your Operating Rooms functioning efficiently and running at full capacity"
        }
    ]
    return (
        <div className="mt-32">
            <h2 className="text-center text-3xl font-bold py-4">WHO WE SERVE</h2>

            <div className="grid grid-cols-3 gap-8 mx-10 py-10">
                {
                    serves.map(serve => <Serve key={serve.serveId} serve={serve}></Serve>)
                }
            </div>


        </div>
    );
};

export default WhoServe;