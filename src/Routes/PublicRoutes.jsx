import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Appointments from "../Pages/Appointments/Appointments";
import Doctors from "../Pages/Doctors/Doctors";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [

            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/appointments",
                element: <PrivateRoutes><Appointments></Appointments></PrivateRoutes>
            },
            {
                path: "/doctors",
                element: <PrivateRoutes><Doctors></Doctors></PrivateRoutes>
            }
        ]
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/register",
        element: <Register></Register>
    },

])