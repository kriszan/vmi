import React, { Component } from "react";
import Lapozgatosizegenyo from "./Lapozgatosizegenyo"
import Randomtext from "./Randomtxtfront"

export default class MainPage extends React.Component {
    render() {
        return (<>
            <Randomtext/>
            <Lapozgatosizegenyo/>
        </>
        );
    }
}
