import { useLoaderData } from "react-router-dom";
import BidFrom from "./BidFrom";
import { Helmet } from "react-helmet-async";
// import useAuthContext from "../../Hook/useAuthContext";

const JobDetails = () => {
  const detailsData = useLoaderData();

  const { Jobtitle, date, Minimum, Maximum, Description, Photo } = detailsData;
  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title>e-Job | Job Details</title>
      </Helmet>
      <h2 className="">Job Details</h2>
      <div className="hero  bg-[#eeeff8]">
        <div className="hero-content flex-col lg:flex-row">
          <img src={Photo} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{Jobtitle}</h1>
            <p className="py-6">{Description}</p>
            <div className="flex justify-between items-center">
              <div>
                <p className="">Minimum price ${Minimum}</p>
                <p className="">Maximum price ${Maximum}</p>
              </div>
              <p className="">Deadline: {date}</p>
            </div>
          </div>
        </div>
      </div>
      <BidFrom detailsData={detailsData}></BidFrom>
    </div>
  );
};

export default JobDetails;
