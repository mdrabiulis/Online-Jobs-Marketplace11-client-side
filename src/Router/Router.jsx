
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import ErrorPages from '../ErrorPages/ErrorPages';
import Home from '../Home/Home/Home';
import Addjob from '../Pages/Addjob/Addjob';

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
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/',
            element: <Home></Home>
        },
    ]
}])

export default Router;