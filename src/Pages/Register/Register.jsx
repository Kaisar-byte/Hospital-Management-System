import { Input } from '@material-tailwind/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Register = () => {

    const { user, createUser, setUser } = useContext(AuthContext)
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target
        const userName = form.userName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(createUser)
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)

            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className='w-72 mx-auto border-2 border-purple-300 p-4 rounded-lg  bg-gradient-to-r from-indigo-200 to-pink-300'>
                <h2 className='text-center text-2xl py-4 text-black-500 font-bold'>Please Register</h2>
                <form onSubmit={handleRegister} className='flex  flex-col justify-center items-center gap-2'>
                    <Input className='text-black' name="userName" color="black" type='text' label="Username" />
                    <Input className='text-black' name='photoURL' color="black" type='text' label="PhotoURL" />
                    <Input className='text-black' name='email' color="black" type='email' required label="Email" />
                    <Input color="black" type='password' name='password' label="Password" required />
                    <button color="blue" className="bg-blue-500 h-7 hover:bg-blue-800 rounded-md px-2 mt-4 ">Register</button>
                </form>
                <div className='py-2'>
                    <div>
                        <p className="text-xs pt-6 text-right">Already have an account. Please <Link to="/login" className="font-bold text-blue-800">Login</Link></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;