import logoimg from "../../../public/logo.png";
// import logotext from "../../../public/logotext.png";


const Logo = () => {
  return (
    <div>
      <div className="flex items-center">
        <img src={logoimg} alt="" className="w-24 h-20" />
        {/* <img src={logotext} alt="" className="w-44"/> */}
        <div className="font-roboto">    
        <h2 className="text-xl font-bold"><samp className="text-xl md:text-7xl lg:text-4xl xl:text-7xl">e</samp>-Leaming</h2>
        </div>
      </div>
    </div>
  );
};

export default Logo;
