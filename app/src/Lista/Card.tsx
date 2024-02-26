import "./Card.css"

export default function Card({src, name} : {src : string, name: string}) {
    window.addEventListener("resize", (e) => {
        document.documentElement.style.setProperty('--gridSize', Math.round(window.innerWidth / 250));
        console.log(Math.round(window.innerWidth / 250));
    });
    return (
        <div className="card">
            <img src={src}/>
            <div>
                <p>{name}</p>
            </div>
        </div>
    );
}