import { useEffect, useState } from "react";
import useAuthContext from "../../Hook/useAuthContext";
import BidRow from "./BidRow";

const MyBids = () => {
  const { user } = useAuthContext();
  const [bidData, setbidData] = useState([]);
  const url = `http://localhost:5000/bidjobs?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setbidData(data);
      });
  }, [url]);
  console.log(bidData);

  return (
    <div className="max-w-7xl mx-auto">
      MyBids{bidData.length}
      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr className="lg:text-lg">
              <th>Images</th>
              <th>Jobtitle</th>
              <th>Bid Deadline</th>
              <th>Bidding Price</th>
              <th>Buyer Email</th>
              <th>status</th>
              {/* <th>Delete</th> */}
            </tr>
          </thead>
          <tbody >
            {bidData.map((biditem) => (
                //    console.log(biditem),
              <BidRow key={biditem._id} biditem={biditem} ></BidRow>
            ))}
            
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default MyBids;
