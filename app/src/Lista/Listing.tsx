import data from "../data.json";
import Card from "./Card";
import "./Listing.css";
import leftArrow from "../public/left-arrow.png";
import rightArrow from "../public/right-arrow.png";

export default function Listing({limit} : {limit? : number}) {
    let list;
    if (limit) list = data.slice(0, limit);
    else list = data;
    return (
        <div className="listing-container">
        <button onClick={() => scroll(-350)}><img src={leftArrow}/></button>
        <div className="listing">
            {list.map(e => <Card src={e.img} name={e.name} key={e.id} id={e.id}/>)}
        </div> 
        <button onClick={() => scroll(350)}><img src={rightArrow}/></button>
    </div>
    )
}

function scroll(n : number) {
    let listing = document.getElementsByClassName("listing");
    if (listing.length == 0) return;
    listing[0].scrollBy({left: n, top: 0, behavior: "smooth"});
}