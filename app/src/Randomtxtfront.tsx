import { Component } from "react";
import "./random.css"
import img from "../src/public/mozi.png"

export default class Randomtxt extends Component {
  render() {
    return (<>

      <img src={img} className="imgmozi" />
      <div className="akarmi">
        <h1 className="headline">Megnyitottunk!!!!</h1>
        <p className="text">Boldogan, örömmel ajánljuk figyelmükbe ujjonnal nyílt mozinkat. Legmodernebb film és hangtechnikai eszközökkel felszerelt mozink számos frissen megjelent blockbuster filmekkel várja Önöket a Nemtudommilyen utca 20. szám alatt. Online jegyvásárlási felületünk hamarosan elérhető lesz a kedves vásárlóink számára addig is jegyeket a Placeholder tér 92 szám alatt és a vetítés helyszínén tudnak venni. Ide még kell vmi szöveg placeholderként ugyhogy írok</p>
      </div>
    </>
    );
  }
}