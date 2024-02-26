import "./Card.css"

export default function Card({src, name} : {src : string, name: string}) {
    return (
        <div className="card">
            <img src={src}/>
            <div>
                <p>{name}</p>
            </div>
        </div>
    );
}