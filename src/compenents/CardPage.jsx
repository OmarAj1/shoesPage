import React from 'react';

function CardDetails(props) {
  return (
    <div  style={{display:"inline-block"}} className="card">
      <img src={props.shoe.Img} alt={props.shoe.Name} />
      <h1>{props.shoe.Name}</h1>
      <h2>${props.shoe.price}</h2>
      <p>{props.shoe.Description}</p>
    </div>
  );
}

export default CardDetails;