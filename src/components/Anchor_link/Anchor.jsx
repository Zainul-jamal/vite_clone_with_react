function Anchor(props){
    return(
         <a href="#"
         style={{
            textDecoration:'None',
            marginRight:'20px'
         }}
         >
            {props.text}
         </a>
    )
}
export default Anchor;