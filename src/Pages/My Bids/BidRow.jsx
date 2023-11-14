

const BidRow = ({biditem}) => {

    console.log(biditem);
    const {  Photo, bidDeadline, Jobtitle, biddingPrice, buyer,status } = biditem;
    return (
        <tr >
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="w-12 md:w-28 h-12 md:h-24">
                <img src={Photo} alt="" />
              </div>
            </div>
          </div>
        </td>
        <td className="text-sm lg:text-lg">{Jobtitle}</td>
        <td className="lg:text-lg">{bidDeadline}</td>
        <td className="lg:text-lg">$ {biddingPrice}</td>
        <td className="lg:text-lg">{buyer}</td>
        <td className="lg:text-lg">{status}..</td>
        {/* <td>$ {Maximum}</td> */}


      </tr>
    );
};

export default BidRow;