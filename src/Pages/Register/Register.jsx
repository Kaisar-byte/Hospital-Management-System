import { Button, Input } from '@material-tailwind/react';
import React from 'react';
import { Form, Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className='w-72 mx-auto border-2 border-purple-300 p-4 rounded-lg  bg-gradient-to-r from-indigo-200 to-pink-300'>
                <h2 className='text-center text-2xl py-4 text-black-500 font-bold'>Please Register</h2>
                <Form className='flex  flex-col justify-center items-center gap-2'>
                    <Input className='text-black' color="black" type='text' label="Email" />
                    <Input className='text-black' color="black" type='text' label="Username" />
                    <Input className='text-black' color="black" type='text' label="PhotoURL" />
                    <Input color="black" type='password' label="Password" />
                    <Button color="blue" className="hover:bg-blue-800 py-2 mt-4 ">Register</Button>
                </Form>
                <div className='py-4'>

                    <div>
                        <p className="text-xs pt-6 text-right">Already have an account. Please <Link to="/login" className="font-bold text-blue-800">Login</Link></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;