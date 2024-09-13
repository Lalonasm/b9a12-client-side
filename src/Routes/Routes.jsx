import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Apartments from "../Pages/Apartments/Apartments";
import ApartmentDetails from "../Pages/Apartments/ApartmentDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/apartment/:id',
                element: <ApartmentDetails></ApartmentDetails>
            },

            {
                path: '/apartments',
                element: <Apartments></Apartments>
            },
            // {
            //     path: '/aparment/:id',
            //     element: (

            //         <ApartmentDetails></ApartmentDetails>

            //     ),
            // },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ],

    },
]);