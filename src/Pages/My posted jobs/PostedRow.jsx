import { Link } from "react-router-dom";

const PostedRow = ({ Jobitem, hendleDelete }) => {
  const { _id, Photo, date, Jobtitle, Minimum, Maximum } = Jobitem;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-12 md:w-28 h-12 md:h-24">
              <img src={Photo} alt="" />
            </div>
          </div>
        </div>
      </td>
      <td>{Jobtitle}</td>
      <td>{date}</td>
      <td>$ {Minimum}</td>
      <td>$ {Maximum}</td>
      <td>
        <Link to={`/jobupdate/${_id}`}>
          <button className="w-full bg-[#6C53F8] h-10 text-white rounded-md">
            Update
          </button>
        </Link>
      </td>
      <td>
        <button
          onClick={() => hendleDelete(_id)}
          className="w-full bg-red-600 h-10 text-white rounded-md"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default PostedRow;
