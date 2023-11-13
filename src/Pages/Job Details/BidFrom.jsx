import { Link } from "react-router-dom";
import useAuthContext from "../../Hook/useAuthContext";

const BidFrom = ({ detailsData }) => {
  const {
    // _id,
    email,
  } = detailsData;
  const { user } = useAuthContext();
  return (
    <div className="  max-w-7xl mx-auto mt-7 ">
      {/* <form onSubmit={hendleBookService}> */}
      <form>
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
                  name="bidding"
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
                  name="date"
                  placeholder="Deadline"
                  className="input input-bordered"
                  // required
                />
              </div>
            </div>
          </div>

          <Link to={"/mybids"}>
            <div className=" my-10 pb-10">
              <input
                type="submit"
                value="Bid this job"
                className="w-full bg-[#6C53F8] h-12 text-white rounded-md"
              />
            </div>
          </Link>
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
