
import "./Card.css"

export default function Card({ src, name }: { src: string, name: string }) {
    window.addEventListener("resize", () => {
        document.documentElement.style.setProperty('--gridSize', Math.round(window.innerWidth * 0.9 / 250).toString());
        console.log(Math.round(window.innerWidth / 250));
    });
    return (
        <div className="card">
            <img src={src} />
            <div>
                <p>{name}</p>
            </div>
        </div>
    );
}