import { Outlet } from "react-router-dom";
import NavBar from "../ShareFile/NavBar/NavBar";
import Footer from "../ShareFile/Footer/Footer";



const Layout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
