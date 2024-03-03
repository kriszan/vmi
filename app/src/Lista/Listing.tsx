import data from "../data.json";
import Card from "./Card";
import "./Listing.css";

export default function Listing({limit} : {limit? : number}) {
    if (limit) data.slice(0, limit);
    return (
        <div className="listing">
            {data.map(e => <Card src={e.img} name={e.name} id={e.id} key={e.id}/>)}
        </div> 
    )
}