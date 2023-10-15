import { Button, Input } from '@material-tailwind/react';
import React from 'react';
import { Form, Link } from 'react-router-dom';
import { BiLogoGoogle } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const Login = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className='w-58 mx-auto border-2 border-purple-300 p-4 rounded-lg  bg-gradient-to-r from-indigo-200 to-pink-300'>
                <h2 className='text-center text-2xl py-4 text-black-500 font-bold'>Please Login</h2>
                <Form className='flex  flex-col justify-center items-center gap-2'>
                    <Input className='text-black' color="black" type='text' label="Username" />
                    <Input color="black" type='password' label="Password" />
                    <Button color="blue" className="hover:bg-blue-800 py-2 mt-4 ">Login</Button>
                </Form>
                <div className='py-4'>
                    <h2 className="text-center text-lg text-blue-800 py-4 font-bold ">Or login using</h2>
                    <div className='flex justify-center items-center gap-4'>
                        <span className="hover:text-blue-500 hover:text-lg"><BiLogoGoogle></BiLogoGoogle></span>
                        <span className="hover:text-blue-500 hover:text-lg"><FaFacebookF></FaFacebookF></span>
                        <span className="hover:text-black-500 font-bold "><FiGithub className='hover:text-lg'></FiGithub></span>
                    </div>
                    <div>
                        <p className="text-xs pt-6 text-right">New to this site. Please <Link to="/register" className="font-bold text-blue-800">Register</Link></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;