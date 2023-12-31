import { Link, useLocation, useNavigate } from "react-router-dom";
import loginimg from "../../../public/login.jpg";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import Swal from "sweetalert2";
import { useState } from "react";
import useAuthContext from "../../Hook/useAuthContext";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const Login = () => {
  const axiosSecure = useAxiosSecure();
  const { signInWithEmail } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();
  const [userLoginErromessage, setUserLoginErromessage] = useState("");
  const [loginUserSuccessful, setloginUserSuccessful] = useState("");

  const hendlesign = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;

    setUserLoginErromessage("");
    setloginUserSuccessful("");

    signInWithEmail(email, password)
      .then((result) => {
        console.log(result.user);
        setloginUserSuccessful("Login Successful");
        const user = { email };

        axiosSecure.post("/jwt", user).then((res) => {
          if (res.data.success) {
            navigate(location?.state ? location?.state : "/");
          }
        });
        Swal.fire({
          icon: "success",
          title: "Login Successful...",
          text: "",
        });
      })
      .catch((error) => {
        console.log(error.message);
        setUserLoginErromessage(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div className="flex flex-col md:flex-row items-center ">
      <Helmet>
        <title>e-Job | Login</title>
      </Helmet>
      <img src={loginimg} className=" rounded-lg md:w-2/4" />
      <div className="w-full lg:w-[35%]">
        <form onSubmit={hendlesign} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              //   required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              //   required
            />
            <label className="label"></label>
          </div>
          {userLoginErromessage && (
            <p className="text-xl font-bold text-red-700">
              {userLoginErromessage}
            </p>
          )}
          {loginUserSuccessful && (
            <p className="text-xl font-bold text-green-800">
              {loginUserSuccessful}
            </p>
          )}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <h2 className="">
            Do not have an account?
            <Link
              to="/signup"
              className=" text-[#3541f3] font-roboto hover:text-[#FF6224] ml-1"
            >
              Sign Up Now
            </Link>
          </h2>
        </form>
        <GoogleLogin></GoogleLogin>
      </div>
    </div>
  );
};

export default Login;
