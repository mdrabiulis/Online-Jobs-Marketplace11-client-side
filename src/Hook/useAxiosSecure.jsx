import axios from "axios";
import { useEffect } from "react";
import useAuthContext from "./useAuthContext";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://server-side-assignment-11.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const SignOutUser = useAuthContext();
  const navigate = useNavigate;

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (
          error?.response?.status === 401 ||
          error?.response?.status === 403
        ) {
          console.log("logOut", error?.response?.status);
          SignOutUser()
            .then(() => {
              navigate("/login");
            })
            .catch(() => {});
        }
      }
    );
  }, [SignOutUser, navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
