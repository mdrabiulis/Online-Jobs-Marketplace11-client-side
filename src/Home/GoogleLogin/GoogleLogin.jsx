import { FcGoogle } from "react-icons/fc";
import useAuthContext from "../../Hook/useAuthContext";
import Swal from "sweetalert2";

const GoogleLogin = () => {
  const { loginUserGooglr } = useAuthContext();

  const googleLogIn = () => {
    loginUserGooglr()
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          icon: "success",
          title: "Successful...",
          text: "",
        });
      })

      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="mx-4 px-4">
      <div className="divider">Or</div>
      <button
        onClick={googleLogIn}
        className="btn hover:text-white  hover:bg-[#6C53F8] w-full"
      >
        <FcGoogle className="w-8 h-8"></FcGoogle>
        Continue With Google
      </button>
    </div>
  );
};

export default GoogleLogin;
