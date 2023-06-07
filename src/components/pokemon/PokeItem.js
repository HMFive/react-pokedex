import React from "react";

function PokeItem(props) {
  return (
        <li key={props.id}>
          <img src={props.image} />
          <p>{props.name}</p>
          <ul>
            {props.types.map((type) => (
              <li key={type.slot}>{type.type.name}</li>
            ))}
          </ul>
        </li>

  )
}

export default PokeItem
