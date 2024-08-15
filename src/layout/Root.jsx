import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const Root = () => {
    return (
        <>
        <div className="container mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Root;