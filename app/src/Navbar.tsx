import React, { Component } from "react";
import "./navbar.css";

export default class Navbar extends React.Component {
    render() {
        return (<>
            <nav className="NavBar">
                <img src={""} style={{ float: "left" }} />
                <a className="NavA" href="./" style={{ paddingLeft: "15vw" }}>Kezdőlap</a>
                <a className="NavA" href="./list" style={{ paddingLeft: "5vw" }}>Filmek</a>
                <a className="NavA" href="#contact" style={{ paddingLeft: "5vw" }}>Elérhetőség</a>
            </nav>

        </>
        );
    }
}
