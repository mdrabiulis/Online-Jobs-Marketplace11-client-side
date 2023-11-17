import { SiReaddotcv } from "react-icons/si";
import { GrDeliver } from "react-icons/gr";
import { BsBank } from "react-icons/bs";


const Section3 = () => {
  return (
    <div className="bg-base-200">
       <div className="max-w-7xl mx-auto text-center py-20">
        <div>
          <h2 className=" text-5xl font-roboto font-bold mb-8 border-b-4 ">How it works</h2>
          <div className="flex flex-col md:flex-row mx-8 md:mx-0 gap-10 justify-between">
            <div className="">
              <div className="flex flex-col justify-center items-center ">
                <SiReaddotcv className="w-12 h-12 "></SiReaddotcv>
                <h2 className="text-xl font-roboto font-bold">Create a Gig</h2>
              </div>
              <p className="">
                Sign up for free, set up your Gig, and offer your work to our
                global audience.
              </p>
            </div>
            <div className="">
              <div className="flex flex-col justify-center items-center ">
              <GrDeliver className="w-12 h-12 "></GrDeliver>
              <h2 className="text-xl font-roboto font-bold">Deliver great work</h2>
              </div>
              <p className="">
                Get notified when you get an order and use our system to discuss
                details with customers.
              </p>
            </div>
            <div className="">
            <div className="flex flex-col justify-center items-center ">
              <BsBank className="w-12 h-12 "></BsBank>
              <h2 className="text-xl font-roboto font-bold">Get paid</h2>
              </div>
              
              <p className="">
                Get paid on time, every time. Payment is available for
                withdrawal as soon as it clears.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
