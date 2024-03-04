import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer"
import "./Layout.css"

export default function Layout() : JSX.Element {
    return (
    <>
    <div className="page-container">
        <Navbar/>
        <div className="page-main">
            <Outlet/>
        </div>
        <Footer/>
    </div>
    </>
    )
}