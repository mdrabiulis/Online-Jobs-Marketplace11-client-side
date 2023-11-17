import { useEffect, useState } from "react";
import useAuthContext from "../../Hook/useAuthContext";
import PostedRow from "./PostedRow";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const MyPostedJobs = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuthContext();
  const [userData, setUserData] = useState([]);

  const url = `/alljobs?email=${user?.email}`;

  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      setUserData(res.data);
    });
  }, [url, axiosSecure]);

  const hendleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/alljobs/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            const remaining = userData.filter((item) => item._id !== id);
            setUserData(remaining);
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title>e-Job | My Posted Jobs</title>
      </Helmet>
      <div className="text-4xl text-center my-6">
        My Posted Jobs:
        <samp className="text-4xl text-blue-700">-{userData.length}</samp>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th>Images</th>
              <th>Jobtitle</th>
              <th>Date</th>
              <th>Minimum</th>
              <th>Maximum</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((Posteditem) => (
              <PostedRow
                key={Posteditem._id}
                Jobitem={Posteditem}
                hendleDelete={hendleDelete}
              ></PostedRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
