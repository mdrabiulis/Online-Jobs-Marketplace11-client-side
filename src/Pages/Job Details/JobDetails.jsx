import { useLoaderData } from "react-router-dom";
// import useAuthContext from "../../Hook/useAuthContext";


const JobDetails = () => {
    const detailsData = useLoaderData();
    // const {user} = useAuthContext()
    // console.log(user.email);
    const {
        _id,
        // Jobtitle,
        // date,
        // Minimum,
        // Maximum,
        // Description,
        // Photo,
      } = detailsData;
    return (
        <div>
            JobDetails{_id}
            
        </div>
    );
};

export default JobDetails;