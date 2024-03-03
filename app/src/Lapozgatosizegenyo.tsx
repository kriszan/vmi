import { Component } from "react";
import Listing from "./Lista/Listing";




export default class Navbar extends Component {
    render() {
        return (<div className="lapozgatosizegenyo">
            <div className="container">
                {<Listing limit={3}></Listing>}
            </div>

        </div>
        );
    }
}
