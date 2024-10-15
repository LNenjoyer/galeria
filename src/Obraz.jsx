import React from "react";
import './Obraz.css';

const Obraz = (props) => (
    <div className="Obraz">
        <img src={props.photo} alt={props.name}/>
        <p>Obraz numer: {props.nr}</p>
        <p>{props.name}</p>
        <p>{props.desc}</p>
        <p>{props.price}</p>
    </div>
)
export default Obraz;