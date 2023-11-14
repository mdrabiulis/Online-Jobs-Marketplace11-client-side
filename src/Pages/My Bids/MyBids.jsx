import { useEffect, useState } from "react";
import useAuthContext from "../../Hook/useAuthContext";
import BidRow from "./BidRow";
import { Helmet } from "react-helmet-async";

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

  const hendle = (id) => {
    console.log(id);

    fetch(`http://localhost:5000/bidjobs/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Complete" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bidData.filter((item) => item._id !== id);
          const updated = bidData.find((item) => item._id === id);
          updated.status = "Complete";
          const newBookings = [updated, ...remaining];
          setbidData(newBookings);
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title>e-Job | My Bids</title>
      </Helmet>
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
          <tbody>
            {bidData.map((biditem) => (
              //    console.log(biditem),
              <BidRow
                key={biditem._id}
                biditem={biditem}
                hendle={hendle}
              ></BidRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBids;
