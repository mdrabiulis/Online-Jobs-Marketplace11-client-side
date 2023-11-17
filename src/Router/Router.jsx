
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
import PrivateRoute from '../Pages/Private Route/PrivateRoute';


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
            element: <PrivateRoute><BidRequests></BidRequests></PrivateRoute>,
      

        },
        {
            path:'/addjob',
            element: <PrivateRoute><Addjob></Addjob></PrivateRoute>
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
            element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
        },
        {
            path:'/JobDetails/:id',
            element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
            loader: ({ params }) =>fetch(`http://localhost:5000/alljob/${params.id}`),
        },
        {
            path:'/mybids',
            element: <PrivateRoute><MyBids></MyBids></PrivateRoute>,
        },
        {
            path:'/jobupdate/:id',
            element: <PrivateRoute><Update></Update></PrivateRoute>,
            loader: ({ params }) =>fetch(`http://localhost:5000/alljob/${params.id}`)
        },
    ]
}])

export default Router;