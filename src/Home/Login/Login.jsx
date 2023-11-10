import { Link } from "react-router-dom";
import loginimg from "../../../public/login.jpg";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

import Swal from "sweetalert2";
import { useState } from "react";
import useAuthContext from "../../Hook/useAuthContext";

const Login = () => {
  const { signInWithEmail } = useAuthContext();

  const [userLoginErromessage, setUserLoginErromessage] = useState("");
  const [loginUserSuccessful, setloginUserSuccessful] = useState("");

  const hendlesign = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);

    setUserLoginErromessage("");
    setloginUserSuccessful("");

    signInWithEmail(email, password)
      .then((result) => {
        console.log(result.user);
        setloginUserSuccessful("Login Successful");

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
          <GoogleLogin></GoogleLogin>
        </form>
      </div>
    </div>
  );
};

export default Login;
