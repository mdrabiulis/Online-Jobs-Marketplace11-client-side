import { useEffect, useState } from "react";
import useAuthContext from "../../Hook/useAuthContext";
import BidRequestRow from "./BidRequestRow";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const BidRequests = () => {
  const { user } = useAuthContext();
  const [bidData, setbidData] = useState([]);

  const url = `https://server-side-assignment-11.vercel.app/bidjobs`;
  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setbidData(res.data);
    });
  }, [url]);

  // console.log(user?.email);
  const findbidData = bidData.filter((item) => item.buyer === user?.email);

  const hendleAccepted = (id) => {
    console.log(id);
    fetch(`https://server-side-assignment-11.vercel.app/bidjobs/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "in progress" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bidData.filter((item) => item._id !== id);
          const updated = bidData.find((item) => item._id === id);
          updated.status = "in progress";
          const newBookings = [updated, ...remaining];
          setbidData(newBookings);
        }
      });
  };

  const hendleRejects = (id) => {
    console.log(id);
    fetch(`https://server-side-assignment-11.vercel.app/bidjobs/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Canceled" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bidData.filter((item) => item._id !== id);
          const updated = bidData.find((item) => item._id === id);
          updated.status = "Canceled";
          const newBookings = [updated, ...remaining];
          setbidData(newBookings);
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title>e-Job | Bid Requests</title>
      </Helmet>
      <div className="text-4xl font-roboto font-bold text-center my-6">
        Bid Requests:
        <samp className="text-4xl text-blue-700">-{findbidData.length}</samp>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th>Images</th>
              <th>Jobtitle</th>
              <th>Date</th>
              <th>Bid offer Price</th>
              <th>Status</th>
              {/* <th>Update</th>
                <th>Delete</th> */}
            </tr>
          </thead>
          <tbody>
            {findbidData.map((bidRequestitem) => (
              <BidRequestRow
                key={bidRequestitem._id}
                bidRequestitem={bidRequestitem}
                hendleAccepted={hendleAccepted}
                hendleRejects={hendleRejects}
              ></BidRequestRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BidRequests;
