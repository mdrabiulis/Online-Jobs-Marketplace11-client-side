const BidRequestRow = ({ bidRequestitem,hendleAccepted,hendleRejects }) => {
  const { _id, Photo, bidDeadline, Jobtitle, biddingPrice, status } =
    bidRequestitem;
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
      <td>{bidDeadline}</td>
      <td>$ {biddingPrice}</td>
      <td>{status}</td>
      
      
      {status === "pending" ? <><td>
        <button onClick={()=>hendleAccepted(_id)} className="w-full bg-green-400 h-10 text-white rounded-md">
          Accepted
        </button>
      </td>
      <td>
        <button onClick={()=>hendleRejects(_id)} className="w-full bg-red-600 h-10 text-white rounded-md"
        >
          Rejects
        </button>
      </td></>:<></>}




      {/* <td>
        <button onClick={()=>hendleAccepted(_id)} className="w-full bg-green-400 h-10 text-white rounded-md">
          Accepted
        </button>
      </td>
      <td>
        <button onClick={()=>hendleRejects(_id)} className="w-full bg-red-600 h-10 text-white rounded-md"
        >
          Rejects
        </button>
      </td> */}
    </tr>
  );
};

export default BidRequestRow;
