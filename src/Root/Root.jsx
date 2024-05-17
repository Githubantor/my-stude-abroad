import { Outlet } from "react-router-dom";
import Navbar from "../Component/NavBar.jsx/Navbar";
import Home from "../Component/Home/Home/Home";
import Footer from "../Component/Footer/Footer";


const Root = () => {
    return (
        <div className="/ mx-10">
            <Navbar></Navbar>
            <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;