import { useEffect, useState } from "react";
import Cards from "../../../ShareFile/Cards/Cards";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const GraphicsDesign = () => {
  const axiosSecure = useAxiosSecure();
  const [allJob, setAllJob] = useState([]);

  useEffect(() => {
    axiosSecure.get("/alljob").then((res) => setAllJob(res.data));
  }, [axiosSecure]);

  console.log(allJob);

  const findCategory = allJob.filter(
    (item) => item.select === "Graphics Design"
  );

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {findCategory.map((card) => (
          <Cards key={card._id} card={card}></Cards>
        ))}
      </div>
    </div>
  );
};

export default GraphicsDesign;
