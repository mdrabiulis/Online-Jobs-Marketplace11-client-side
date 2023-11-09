import { FcGoogle } from "react-icons/fc";



const GoogleLogin = () => {
    return (
        <div className="">
        <div className="divider">Or</div>
        <button   className="btn hover:text-white  hover:bg-[#6C53F8] w-full">
          <FcGoogle className="w-8 h-8"></FcGoogle>
          Continue With Google
        </button>
      </div>
    );
};

export default GoogleLogin;