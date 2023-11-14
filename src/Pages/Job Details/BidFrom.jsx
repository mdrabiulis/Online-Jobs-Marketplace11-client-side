
import Swal from "sweetalert2";
import useAuthContext from "../../Hook/useAuthContext";
import { useNavigate } from "react-router-dom";

const BidFrom = ({ detailsData }) => {
  const navigate = useNavigate()
  const {
    // _id,
    email,
    Photo,
    Jobtitle,
  } = detailsData;
  const { user } = useAuthContext();

  const hendleBid = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const buyer = from.buyer.value;
    const biddingPrice = from.biddingPrice.value;
    const bidDeadline = from.bidDeadline.value;

    const data={ Photo, Jobtitle, email, biddingPrice, buyer, bidDeadline };

    fetch("http://localhost:5000/bidjobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({data,status: "pending"}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.insertedId);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Bid success",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/mybids");
        }
      });


  };

  return (
    <div className="  max-w-7xl mx-auto mt-7 ">
      {/* <form onSubmit={hendleBookService}> */}
      <form onSubmit={hendleBid}>
        <div className="rounded-md  bg-[#eeeff8] px-10">
          <div className="grid md:grid-cols-4 gap-6  ">
            <div className="grid col-span-2  w-full mx-auto">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>

                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  readOnly
                  placeholder="Email"
                  className="input input-bordered"
                  // required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price(your bidding amount)</span>
                </label>
                <input
                  type="text"
                  name="biddingPrice"
                  placeholder="Price"
                  className="input input-bordered"
                  // required
                />
              </div>
            </div>

            <div className="col-span-2  w-full mx-auto">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Buyer Email</span>
                </label>
                <input
                  type="text"
                  name="buyer"
                  defaultValue={email}
                  readOnly
                  placeholder="Buyer Email"
                  className="input input-bordered"
                  // required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Deadline</span>
                </label>
                <input
                  type="date"
                  name="bidDeadline"
                  placeholder="Deadline"
                  className="input input-bordered"
                  // required
                />
              </div>
            </div>
          </div>

          <div className=" my-10 pb-10">
            <input
              type="submit"
              value="Bid this job"
              className="w-full bg-[#6C53F8] h-12 text-white rounded-md"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BidFrom;
