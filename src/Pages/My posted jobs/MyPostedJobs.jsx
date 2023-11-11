import { useEffect, useState } from "react";
import useAuthContext from "../../Hook/useAuthContext";

const MyPostedJobs = () => {
  const { user } = useAuthContext();
  const [userData, setUserData ] = useState([]);
  const url = `http://localhost:5000/alljobs?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data)
        console.log(data);
      });
  }, [url]);

  return <div>
    My Posted Jobs: 
    <div className="text-8xl">{userData.length}</div>
  </div>;
};

export default MyPostedJobs;
