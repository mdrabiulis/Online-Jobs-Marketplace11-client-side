import { Link } from "react-router-dom";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import loginimg from "../../../public/login.jpg";
import useAuthContext from "../../Hook/useAuthContext";
import Swal from "sweetalert2";
import { useState } from "react";

const SignUp = () => {
  const { createNewUser, userAllUpdateProfile } = useAuthContext();
  const [userErro, setUserError] = useState("");
  const [createSuccessful, setCreateUserSuccessful] = useState("");

  const hendleSignUp = (event) => {
    event.preventDefault();
    const from = event.target;
    const Name = from.Name.value;
    const email = from.email.value;
    const password = from.password.value;
    const Photo = from.Photo.value;
    console.log(Name, email, password, Photo);
    setUserError("");
    setCreateUserSuccessful("");

    if (!/^(?=.*[0-9])(?=.*[A-Z])(?=.*[@$!%*#?&]).{7,16}$/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Password must contain one digit from 1 to 9 , one uppercase letter, a special character and it must be 7-16 characters long.!  Example: Aa123@#$ `,
        
      });
      return;
    } else {
      createNewUser(email, password)
        .then((result) => {
          console.log(result.user);
          userAllUpdateProfile(Name, Photo)
            .then(() => {})
            .catch(() => {});
          setCreateUserSuccessful("Create Account Successful");
          Swal.fire({
            icon: "success",
            title: "Create Account Successful...",
            text: "",
            
          });
          // navigate("/");
        })
        .catch((error) => {
          setUserError(error.message);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            
          });
        });
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center ">
      <img src={loginimg} className=" rounded-lg md:w-2/4" />
      <div className="w-full lg:w-[35%]">
        <form onSubmit={hendleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="Name"
              placeholder="Name"
              className="input input-bordered"
              //   required
            />
          </div>
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              type="url"
              name="Photo"
              placeholder="PhotoURL"
              className="input input-bordered"
              //   required
            />
            <label className="label"></label>
          </div>
          {userErro && (
            <p className="text-xl font-bold text-red-700">{userErro}</p>
          )}
          {createSuccessful && (
            <p className="text-xl font-bold text-green-800">
              {createSuccessful}
            </p>
          )}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign Up</button>
          </div>
          <h2 className="">
            Do have an account?
            <Link
              to="/login"
              className=" text-[#3541f3] font-roboto hover:text-[#FF6224] ml-1"
            >
              Log in
            </Link>
          </h2>
          <GoogleLogin></GoogleLogin>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
