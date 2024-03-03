import { useNavigate } from "react-router-dom";
import "./Card.css"

export default function Card({ src, name, id }: { src: string, name: string, id : number }) {
    const navigate = useNavigate();

    const routeChange = (id: number) => {
        let path = `/${id}`;
        navigate(path);
    }

    window.addEventListener("resize", () => {
        document.documentElement.style.setProperty('--gridSize', Math.round(window.innerWidth * 0.9 / 250).toString());
        console.log(Math.round(window.innerWidth / 250));
    });
    return (
        <div className="card" onClick={()=> {{   routeChange(id)}}}>
            <img src={src} />
            <div>
                <p>{name}</p>
            </div>
        </div>
    );
}