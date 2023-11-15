import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../../Hook/useAuthContext";

const PrivateRoute = ({children}) => {

const {user, loading} = useAuthContext()
const location = useLocation()



if (loading) {
    return <progress className="progress w-56 justify-center"></progress>
    // return <progress className="progress progress-primary w-56" value="10" max="100"></progress>
}


if (user?.email) {
   return children;
}
    return <Navigate state={location.pathname} to="/login" replace></Navigate>
};

export default PrivateRoute;