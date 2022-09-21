export default function Die(props){



    return(
<div className = "die"  onClick={props.onClick}>{props.number}</div>
    )
}