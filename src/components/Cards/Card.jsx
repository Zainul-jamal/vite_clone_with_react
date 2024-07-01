function Card(props) {
    return(
<div className="card" style={{
    borderRadius:'20px',
    background:'rgb(246 246 247)',
    fontWeight:'bold',
    padding:'10px',
    margin:'5px',
    minHeight:'29px',
    width:'80%',
    
}}>
    <h4>{props.icon} </h4>
    <h3>{props.text}</h3>
    <p>{props.para}</p>
</div>
    )
}
export default Card;