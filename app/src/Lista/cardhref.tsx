import "../Lista/cardhref.css"
import data from "../data.json"
import { useParams } from "react-router-dom";
export default function Listing() {
    const { id } = useParams();
    let enyem = {
        name: "",
        img: "",
        discription: "",
        cost: 0
    };
    data.forEach(element => {
        if (element.id.toString() == id) {
            enyem = element;
            return;
        }
    });
    return (
        <div className="container">

            <h1>{enyem.name}</h1>
            <div className="majdnemmindenis">
                <img className="cardimg" src={enyem.img} alt="img" />
                <div className="mindenis">
                    <p className="description">{enyem.discription}</p>
                    <a style={{ fontWeight: "bold" }}>A jegy ára: </a><a>{enyem.cost} Ft</a><br />
                    <button disabled>Jegyvásárlás</button>
                </div>
            </div>
        </div>
    )
}