import { useNavigate } from "react-router-dom";
import "./Card.css"

export default function Card({ src, name, id }: { src: string, name: string, id : number }) {
    const navigate = useNavigate();

    const routeChange = (id: number) => {
        let path = `filmek/${id}`;
        navigate(path);
    }

    return (
        <div className="card" onClick={()=> {{   routeChange(id)}}}>
            <img src={src} />
            <div>
                <p>{name}</p>
            </div>
        </div>
    );
}