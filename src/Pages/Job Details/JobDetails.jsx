import { useLoaderData } from "react-router-dom";


const JobDetails = () => {
    const detailsData = useLoaderData();
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