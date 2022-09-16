import Pet from "./Pet"

export default function Friend (props){

const friendPets = props.pets.map((pet)=>{return(
    <Pet key={Math.random()* 12312} {...pet} />
)})

    return(
    <div className="friend-flex-div">
    <div className="friend-list-div">
        <div className ="friend-div">
    <h1 className="friend-name"><span></span>  {props.name}</h1>
    <h2><span>Age:</span>{props.age}</h2></div>
    <h1 className ="petinfo">Pet Info</h1>
    <div className ="pet-info-div">{friendPets}</div>
    
    </div>

    </div>
    )
}