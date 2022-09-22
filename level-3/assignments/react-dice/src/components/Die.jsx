export default function Die(props){


const backgroundColor =  props.isHeld ? "green" : "white"
    return(
<div style ={{backgroundColor:backgroundColor}}className = "die"  onClick={props.onClick}>{props.number}</div>
    )
}