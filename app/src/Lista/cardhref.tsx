import "cardhref.css"
export default function Listing({imgsrc} : {imgsrc : string}, {tittle} : {tittle : string}, {pharagraph}:{pharagraph: string}) {

    return (
        <div className="container">
            <h1></h1>
            <img className="cardimg" src={imgsrc} alt="img"/>
            <p>{pharagraph}</p>
        </div> 
    )
}