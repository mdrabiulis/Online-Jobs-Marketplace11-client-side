import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const [select, setSelect] = useState(null);
  const UpdateData = useLoaderData();

  const {
    _id,
    Jobtitle,
    date,
    Minimum,
    Maximum,
    Description,
    Photo,
    email,
    // select,
  } = UpdateData;

  const hendleUpdate = (event) => {
    event.preventDefault();
    const from = event.target;
    const Jobtitle = from.title.value;
    const Minimum = from.minimum.value;
    const Maximum = from.maximum.value;
    const date = from.date.value;
    const Description = from.description.value;
    const Photo = from.Photo.value;
    const allUpdateData = {
      Jobtitle,
      date,
      select,
      Minimum,
      Maximum,
      Description,
      Photo,
    };

    fetch(`http://localhost:5000/alljob/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allUpdateData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "success",
            text: "Update Your job Successfully ....",
          });
        }
      });
  };
  return (
    <div className="  max-w-7xl mx-auto mt-7 ">
      <Helmet>
        <title>e-Job | Update</title>
      </Helmet>
      <form onSubmit={hendleUpdate}>
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
                  defaultValue={email}
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
                  defaultValue={Jobtitle}
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
                  defaultValue={Minimum}
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
                  defaultValue={date}
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
                  defaultValue={select}
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
                  defaultValue={Maximum}
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
              defaultValue={Description}
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
              defaultValue={Photo}
              className="input input-bordered"
              required
            />
          </div>

          <div className=" my-10 pb-10">
            <input
              type="submit"
              value="Update"
              className="w-full bg-[#6C53F8] h-12 text-white rounded-md"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update;
