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

    return (
        <>
        <div> 
            <input type="text" id="searchbar" onChange={search}/>
        </div>
        <div className="container">
            {list.map(e => <Card src={e.img} name={e.name} key={e.id}/>)}
        </div>
        </>
    )
}
