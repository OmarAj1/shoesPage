// function Card (props){


// return<div onClick={props.onClick} className = 'card'>
//     {/* here should be the fetching */}
//         <img src={props.url}></img>
//         <h1>{props.name}</h1>
//         <span id="price" >
//         <h1>price</h1> <h2 >${props.price}</h2>

//         </span>
// </div>
// }
// export default Card;

function Card (props){


return<div onClick={props.onClick} className = 'card'>
    {/* here should be the fetching */}
        <img src={props.url}></img>
        <h1>{props.name}</h1>
        <span id="price" >
        <h1>price</h1> <h2 >${props.price}</h2>

        </span>
</div>
}
export default Card;