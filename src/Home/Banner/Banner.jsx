import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import bannerimg1 from "../../assets/Development.webp";
import bannerimg2 from "../../assets/logo-maker-banner-wide-desktop-1352-2x.webp";
import bannerimg3 from "../../assets/Marketing.webp";
import bannerimg4 from "../../assets/2.webp";

const Banner = () => {
  return (
<div className="mb-12">
<Swiper
      spaceBetween={100}
      centeredSlides={true}
      autoplay={{
        delay: 9800,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper "
    >
      <SwiperSlide>
        <img
          className="w-[100%] h-[400px] lg:h-[600px] xl:h-[700px]"
          src={bannerimg4}
          alt=""
          //   style={{ width: "100%", height: "700px" }}
        />
        <h2 className=" ml-12 text-white text-xl lg:text-5xl -mt-80 lg:-mt-96 pl-2 lg:pl-20 lg:py-6">
          Find the right <span className="">freelance</span> <br></br> service,
          right away
        </h2>
        <div className=" ml-12 flex flex-col lg:flex-row pl-2 lg:pl-20 text-white items-start gap-2 lg:items-center mt-4">
          <p className=" text-lg">Popular:</p>
          <button className="border rounded-md p-2 ml-1 md:ml-3 ">Website Design</button>
          <button className="border rounded-md p-2 ml-1 md:ml-3">Logo Design</button>
          <button className="border rounded-md p-2 ml-1 md:ml-3">WordPress</button>
          <button className="border rounded-md p-2 ml-1 md:ml-3">AI Services</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex text-left">
          <img
            className="w-[60%] h-[400px] lg:h-[600px] xl:h-[700px]"
            src={bannerimg1}
            alt=""
          />
          <div className="bg-[#1f57c3] w-[60%] h-[400px] lg:h-[600px] xl:h-[700px] pl-5 ">
            <h3 className="lg:mt-44 text-lg text-white font-roboto ont-bold py-3">For talent</h3>
            <h2 className="text-white lg:text-5xl font-bold font-roboto py-3">
              How work should work & Find great work
            </h2>
            <p className="text-white  font-bold font-roboto py-3 ">
              Forget the old rules. You can have the best people. Right now.
              Right here.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-[100%] h-[400px] lg:h-[600px] xl:h-[700px]"
          src={bannerimg3}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-[100%] h-[400px] lg:h-[600px] xl:h-[700px] bg-[#446EE7]"
          src={bannerimg2}
          alt=""
        />
        <h2 className=" ml-8 text-white text-xl lg:text-5xl -mt-80 lg:-mt-96 pl-2 lg:pl-6 xl:pl-28">
          Find the right <span className="">freelance</span> <br></br> service,
          right away
        </h2>
        <div className=" ml-8 flex flex-col  lg:flex-row pl-2 lg:pl-2 xl:pl-28 text-white items-start gap-2 xl:items-center mt-4">
          <p className=" text-lg">Popular:</p>
          <button className="border rounded-md p-2 ml-1  ">Website Design</button>
          <button className="border rounded-md p-2 ml-1 ">Logo Design</button>
          <button className="border rounded-md p-2 ml-1 ">WordPress</button>
          <button className="border rounded-md p-2 ml-1 ">AI Services</button>
        </div>
      </SwiperSlide>
    </Swiper>
</div>
  );
};

export default Banner;
