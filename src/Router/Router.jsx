
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import ErrorPages from '../ErrorPages/ErrorPages';

const Router = createBrowserRouter([{
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
        
    ]
}])

export default Router;