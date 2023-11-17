import images from "../../assets/EN.webp";

const Section = () => {
  return (
    <div className="bg-[#0D084D] my-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-around items-center p-2 md:py-10">
        <div className="py-6">
          <h2 className="text-xl md:text-4xl text-white py-2 md:py-4">Business Solutions</h2>
          <h2 className="text-3xl md:text-6xl font-roboto text-white py-2 md:py-4">
            Advanced solutions and professional talent for businesses
          </h2>
          <div className="py-2 md:py-6">
            <p className="text-base md:text-xl text-white">Fiverr Pro</p>
            <p className="text-base md:text-xl text-white">
              Access top freelancers and professional business tools for any
              project
            </p>
          </div>
          <div className="py-2 md:py-6">
            <p className="text-base md:text-xl text-white">Fiverr Certified</p>
            <p className="text-base md:text-xl text-white">
              Build your own branded marketplace of certified experts
            </p>
          </div>
          <div className="py-2 md:py-6">
            <p className="text-base md:text-xl text-white">Fiverr Enterprise</p>
            <p className="text-base md:text-xl text-white">
              Manage your freelance workforce and onboard additional talent with
              an end-to-end SaaS solution
            </p>
          </div>
          <div className="py-8">
            <button className="bg-white font-bold p-3 rounded-md text-[#646464]">
              Learn more
            </button>
          </div>
        </div>
        <img className="w-[600px]" src={images} alt="" />
      </div>
    </div>
  );
};

export default Section;
