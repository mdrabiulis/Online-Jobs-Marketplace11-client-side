import PropTypes from "prop-types";
const Cards = ({ card }) => {
  const {
    Jobtitle,
    date,
    Minimum,
    Maximum,
    Description,
    Photo,
  } = card;
  return (
    <div className="flex">
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img src={Photo} alt={Jobtitle} className="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{Jobtitle}</h2>

          <div className="">
            <p>Minimum Price ${Minimum}</p>
            <p>Maximum Price ${Maximum}</p>
            <p>Date {date}</p>
          </div>

          <p>{Description}</p>
        </div>
        <div className="card-actions justify-center mb-4">
          <button className="btn btn-primary">Bid Now</button>
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  card: PropTypes.object,
};
export default Cards;
