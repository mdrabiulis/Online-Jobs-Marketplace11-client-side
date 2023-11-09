
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import ErrorPages from '../ErrorPages/ErrorPages';
import Home from '../Home/Home/Home';
import Addjob from '../Pages/Addjob/Addjob';
import Login from '../Home/Login/Login';
import SignUp from '../Home/SignUp/SignUp';

const Router = createBrowserRouter([{
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/addjob',
            element: <Addjob></Addjob>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/signup',
            element: <SignUp></SignUp>
        },
    ]
}])

export default Router;