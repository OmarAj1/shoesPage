function Card (props){
return<div>
    {/* here should be the fetching */}
        <img src={props.url}></img>
        <h1>{props.name}</h1>
        <h2>{props.price}</h2>
</div>
}
export default Card;