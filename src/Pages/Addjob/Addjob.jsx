import { useState } from "react";
import useAuthContext from "../../Hook/useAuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Addjob = () => {
  const { user } = useAuthContext();
  const [select, setSelect] = useState(null);
  const navigate = useNavigate();

  const hendleBookService = (event) => {
    event.preventDefault();
    const from = event.target;
    const Jobtitle = from.title.value;
    const Minimum = from.minimum.value;
    const Maximum = from.maximum.value;
    const date = from.date.value;
    const Description = from.description.value;
    const Photo = from.Photo.value;
    const email = user?.email;
    const allData = {
      Jobtitle,
      email,
      date,
      select,
      Minimum,
      Maximum,
      Description,
      Photo,
    };
    // console.log(Jobtitle, Email, date, select, Minimum, Maximum,Description,Photo);
    // console.log(allData);

    fetch("https://server-side-assignment-11.vercel.app/Addjob", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Add job success",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/mypostedjobs");
        }
      });
  };

  return (
    <div className="  max-w-7xl mx-auto mt-7 ">
      <Helmet>
        <title>e-Job | Add job</title>
      </Helmet>
      <form onSubmit={hendleBookService}>
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
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Job title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Job title"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Minimum price</span>
                </label>
                <input
                  type="text"
                  name="minimum"
                  placeholder="Minimum price"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="col-span-2  w-full mx-auto">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Deadline</span>
                </label>
                <input
                  type="date"
                  name="date"
                  placeholder="Deadline"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  className="select select-bordered w-full "
                  onChange={(e) => setSelect(e.target.value)}
                >
                  <option>Select Category?</option>
                  <option>Web Development</option>
                  <option>Ddigital Marketing</option>
                  <option>Graphics Design</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Maximum price</span>
                </label>
                <input
                  type="text"
                  name="maximum"
                  placeholder="Maximum price"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-control  ">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              placeholder="Description"
              name="description"
              className="textarea textarea-bordered textarea-md w-full h-32"
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              type="url"
              name="Photo"
              placeholder="PhotoURL"
              className="input input-bordered"
              required
            />
          </div>

          <div className=" my-10 pb-10 ">
            <button className="w-full bg-[#6C53F8] h-12 text-white rounded-md">Add job</button>

          </div>
        </div>
      </form>
    </div>
  );
};

export default Addjob;
