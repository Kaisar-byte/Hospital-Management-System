import React from 'react';

const Serve = ({ serve }) => {
    const { serveId, serveHeading, serveIcon, serveText } = serve
    return (
        <div className="shadow-xl rounded-lg p-6 border-2 hover:border-gray-100 border-gray-400 hover:bg-red-400 hover:text-white mx-4">
            <div className="flex justify-center items-center ">
                <span className=" p-2 w-10 text-center text-2xl text-orange-400 bg-green-800 hover:bg-blue-600 hover:text-white rounded-full m-2">{serveIcon}</span>
            </div>
            <h2 className="text-center text-xl font-semibold py-2">{serveHeading}</h2>
            <p className="text-center text-sm">{serveText}</p>
        </div>
    );
};

export default Serve;