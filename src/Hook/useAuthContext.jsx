import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";


const useAuthContext = () => {
    const context = useContext(AuthContext)
    return context
};

export default useAuthContext;