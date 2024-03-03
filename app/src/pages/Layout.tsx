import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer"
import "./Layout.css"

export default function Layout() : JSX.Element {
    return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
    )
}