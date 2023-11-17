import images from "../../assets/333webp.webp";

const Section2 = () => {
    return (
        <div>
                <div className="bg-[#F1FDF7] my-10">
      <div className="max-w-7xl mx-auto gap-6 flex flex-col lg:flex-row justify-around items-center p-2 md:py-10">
      <img className="" src={images} alt="" />
        <div className="py-6">
          <h2 className="text-xl md:text-4xl text-slate-800 py-2 md:py-4">The best part? Everything.</h2>
          
          <div className="py-2 md:py-6">
            <p className="text-base md:text-xl text-slate-800">Stick to your budget</p>
            <p className="text-base md:text-xl text-slate-800">
            Find the right service for every price point. No hourly rates, just project-based pricing.
            </p>
          </div>
          <div className="py-2 md:py-6">
            <p className="text-base md:text-xl text-slate-800">Get quality work done quickly</p>
            <p className="text-base md:text-xl text-slate-800">
            Hand your project over to a talented freelancer in minutes, get long-lasting results.
            </p>
          </div>
          <div className="py-2 md:py-6">
             <p className="text-base md:text-xl text-slate-800">Pay when you are happy</p>
            <p className="text-base md:text-xl text-slate-800">
            Upfront quotes mean no surprises. Payments only get released when you approve.
            </p>
          </div>
          <div className="py-2 md:py-6">
             <p className="text-base md:text-xl text-slate-800">Count on 24/7 support</p>
            <p className="text-base md:text-xl text-slate-800">
            Our round-the-clock support team is available to help anytime, anywhere.
            </p>
          </div>

        </div>
        
      </div>
    </div>
        </div>
    );
};

export default Section2;