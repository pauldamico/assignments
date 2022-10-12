import React, {useState} from "react";



export default function Games (props){
    const [gameInfo, setGameInfo] = useState({progress:"test", characters:"", rank:"", usernames:"", other:""})
    return(<div>
          <div className="home-item-div">
            <li className="profile-list-title">{props.item.title}</li>
            <button className="edit-stats" onClick={()=>{props.editStatsHandler(props.item.id, 
                gameInfo.progress,  
                gameInfo.characters,
                gameInfo.rank,
                gameInfo.usernames,
                gameInfo.other
                
                
                )}}>Edit Stats</button>
            <img
            
              className="profile-list-img"
              src={props.item.thumbnail}
            />
            <button className="remove-game" onClick={() => {
                props.removeFromProfile(props.item.id);
              }}>Remove Game</button>
          </div>
    </div>)
}