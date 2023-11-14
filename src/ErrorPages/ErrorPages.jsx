import { Link } from "react-router-dom";
import errorimg from "/public/ErrorPage404-03.jpg"

const ErrorPages = () => {
    return (
        
        <div className=" flex flex-col items-center">
            <Link to={"/"}><button className="bg-[#6C53F8] h-12 text-white rounded-md text-2xl mt-3 w-44">Back to Home</button></Link>
            <img src={errorimg} alt="" />
        </div>
    );
};

export default ErrorPages;