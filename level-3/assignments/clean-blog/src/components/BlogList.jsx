export default function BlogList (props){
    console.log(props)
    return(
        <div className="blog-list-child-div">
            <h1>{props.title}</h1>
            <h3>{props.subTitle}</h3>
            <h5>Posted by {props.author} on {props.date}</h5>
        </div>
    )
}