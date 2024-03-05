import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import AOS from 'aos';
  import 'aos/dist/aos.css'; 

const Main = () => {
    AOS.init();
    return (
        <div  className="headers overflow-x:hidden ">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;