import data from "../data.json";
import Card from "./Card";

export default function Listing({limit} : {limit : number | null}) {
    if (limit) data.slice(0, limit);
    return (
        <div className="card-container">
            {data.map(e => <Card src={e.img} name={e.name} key={e.id}/>)}
        </div> 
    )
}