
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import ErrorPages from '../ErrorPages/ErrorPages';
import Home from '../Home/Home/Home';
import Addjob from '../Pages/Addjob/Addjob';
import Login from '../Home/Login/Login';
import SignUp from '../Home/SignUp/SignUp';
import MyPostedJobs from '../Pages/My posted jobs/MyPostedJobs';

import JobDetails from '../Pages/Job Details/JobDetails';
import MyBids from '../Pages/My Bids/MyBids';
import Update from '../Pages/Update/Update';
import BidRequests from '../Pages/BidRequests/BidRequests';


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
            path:'/bidrequests',
            element: <BidRequests></BidRequests>,
            // loader:()=> fetch('http://localhost:5000/bidjobs')

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
        {
            path:'/mypostedjobs',
            element: <MyPostedJobs></MyPostedJobs>
        },
        {
            path:'/JobDetails/:id',
            element: <JobDetails></JobDetails>,
            loader: ({ params }) =>fetch(`http://localhost:5000/alljob/${params.id}`),
        },
        {
            path:'/mybids',
            element: <MyBids></MyBids>,
        },
        {
            path:'/jobupdate/:id',
            element: <Update></Update>,
            loader: ({ params }) =>fetch(`http://localhost:5000/alljob/${params.id}`)
        },
    ]
}])

export default Router;