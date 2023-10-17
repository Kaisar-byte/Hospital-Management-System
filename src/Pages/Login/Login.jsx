import React, { useContext } from 'react';
import { Input } from '@material-tailwind/react';
import { Form, Link } from 'react-router-dom';
import { BiLogoGoogle } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {
    const { user, signIn } = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(user)
            })
            .catch(err => {
                console.log(err)
            })

    }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className='w-58 mx-auto border-2 border-purple-300 p-4 rounded-lg  bg-gradient-to-r from-indigo-200 to-pink-300'>
                <h2 className='text-center text-2xl py-4 text-black-500 font-bold'>Please Login</h2>
                <form onSubmit={handleLogin} className='flex flex-col justify-center items-center gap-2'>
                    <Input className='text-black' name='email' color="black" type='email' label="Email" required />
                    <Input color="black" name="password" type='password' label="Password" required />
                    <h3 className='text-xs pl-20 text-white'>Forgot Password</h3>
                    <button className='bg-yellow-800 px-4 rounded-md'>Login</button>
                </form>
                <div className='py-2'>
                    <h2 className="text-center text-lg text-blue-800 font-bold ">Or login using</h2>
                    <div className='flex justify-center items-center gap-4 py-2'>
                        <span className="hover:text-blue-500 hover:text-lg"><BiLogoGoogle></BiLogoGoogle></span>
                        <span className="hover:text-blue-500 hover:text-lg"><FaFacebookF></FaFacebookF></span>
                        <span className="hover:text-black-500 font-bold "><FiGithub className='hover:text-lg'></FiGithub></span>
                    </div>
                    <div>
                        <p className="text-xs pt-2 text-right">New to this site. Please <Link to="/register" className="font-bold text-blue-800">Register</Link></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;