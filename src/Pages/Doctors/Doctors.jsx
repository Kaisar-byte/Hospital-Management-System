import React from 'react';

import Doctor from './Doctor';

const Doctors = () => {
    return (

        <div className="container p-6">
            <div className='grid grid-cols-3 gap-2'>
                <Doctor></Doctor>
                <Doctor></Doctor>
                <Doctor></Doctor>
                <Doctor></Doctor>
                <Doctor></Doctor>
                <Doctor></Doctor>
            </div>

        </div>
    );
};

export default Doctors;