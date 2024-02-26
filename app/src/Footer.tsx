import { Component } from "react";
import "./navbar.css";

export default class Navbar extends Component {
    render() {
        return (<>
            <footer className="Contact">
      <div className="CCol">
        <p className="CHeadline">
          Kapcsolat
        </p>
        <p className="CInfo">Telefonszám: +12 34 567 8999</p>
      </div>
      <div className="CCol">
        <p className="CHeadline">
          Készítette:
        </p>
        <p className="CInfo">Rábel Bence <br/>
          Szávai Krisztián
        </p>
      </div>
    </footer>

        </>
        );
    }
}
