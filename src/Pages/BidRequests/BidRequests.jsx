import { useEffect, useState } from "react";
import useAuthContext from "../../Hook/useAuthContext";
import BidRequestRow from "./BidRequestRow";

const BidRequests = () => {
  const { user } = useAuthContext();
  const [bidData, setbidData] = useState([]);

  const url = `http://localhost:5000/bidjobs`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setbidData(data);
      });
  }, [url]);

  const findbidData = bidData.filter((item) => item.buyer === user?.email);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-4xl text-center my-6">
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
              ></BidRequestRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BidRequests;
