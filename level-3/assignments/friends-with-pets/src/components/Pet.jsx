export default function Pet(props){
    return(
        <div className="pet-div">
           <h1><span className="pet-name-text"></span>{props.name}</h1> 
           <div className="image-div">
           <img className="image" src={props.image}/>
           </div>
           <h2><span className="breed-name-text"></span>{props.breed}</h2>
        </div>
    )
}