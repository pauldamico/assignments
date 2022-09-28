

export default function Colors (props){
console.log(props)
    return(
        <div className = "colors-div" style={props.style}>
            {props.children}
        </div>
    )
}