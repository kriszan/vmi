import Card from "../Lista/Card"
import { useState } from "react";
import data from "../data.json";
import "./List.css";

export default function List() {
    const [list, setList] = useState(data);

    const search = (e : any) => {
        const filtered = data.filter(i => i.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setList(filtered);
    }

    window.addEventListener("resize", resize);
    resize();

    return (
        <div className="container">
        <div className="list-container">
            <div className="search-container">
                <input type="text" id="searchbar" placeholder="search..." onChange={search}/>
                <div></div>
            </div>
            <div className="card-container">
                {list.map(e => <Card src={e.img} name={e.name} key={e.id} id={e.id}/>)}
            </div>
        </div>
        </div>
    )
}

function resize() {
    document.documentElement.style.setProperty('--gridSize', Math.round(window.innerWidth * 0.9 / 250).toString());
    console.log(Math.round(window.innerWidth / 250));
}
