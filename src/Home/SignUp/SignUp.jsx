import { Link } from "react-router-dom";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import loginimg from "../../../public/login.jpg";




const SignUp = () => {

    const hendleSignUp = (event) => {
        event.preventDefault();
        const from = event.target;
        const Name = from.Name.value;
        const email = from.email.value;
        const password = from.password.value;
        const Photo = from.Photo.value;
        console.log( Name,email,password,Photo);

    }


    return (
        <div className="flex flex-col md:flex-row items-center ">
        <img
          src={loginimg}
          className=" rounded-lg md:w-2/4"
        />
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
              <label className="label">
              </label>
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
              <label className="label">
              </label>
            </div>
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