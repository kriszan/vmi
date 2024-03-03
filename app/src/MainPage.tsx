import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Lapozgatosizegenyo from "./Lapozgatosizegenyo"

export default class MainPage extends React.Component {
    render() {
        return (<>
            <Navbar/>
            <Lapozgatosizegenyo/>
            <Footer/>
        </>
        );
    }
}
