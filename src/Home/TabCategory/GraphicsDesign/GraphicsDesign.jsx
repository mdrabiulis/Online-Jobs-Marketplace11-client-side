import { useEffect, useState } from "react";
import Cards from "../../../ShareFile/Cards/Cards";


const GraphicsDesign = () => {
    const [allJob, setAllJob] = useState([])



useEffect(()=>{
    fetch('http://localhost:5000/alljob')
    .then(res => res.json())
        .then(data =>{
            setAllJob(data)})
},[])


console.log(allJob);


const findCategory = allJob.filter((item) => item.select === "Graphics Design");

    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {
                findCategory.map(card =><Cards key={card._id} card={card}></Cards>)
            }
            </div>
        </div>
    );
};

export default GraphicsDesign;