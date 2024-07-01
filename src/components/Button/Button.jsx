function Button(props){
    return(
        <button 
        style={{
            borderRadius:'20px',
            fontWeight:'bold',
            padding:'10px',
            margin:'5px',
            minHeight:'29px',
            border:'none',
            width:'23%',
            background:props.bgColor,
            color:props.color
        }}
        
        >
            {!props.icon ? null: props.icon} {props.text}
        </button>
    )
}
export default Button;