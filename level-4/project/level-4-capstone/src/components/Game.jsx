import React, {useState} from "react";
export default function Games (props){



    const [gameInfo, setGameInfo] = useState({progress:"", characters:"", rank:"", usernames:"", other:""})
    const editChangeHandler = ()=>{
        const {name, value} = event.target
        setGameInfo(prev=>({...prev, [name]:value}))
    }

  


    return(<div>
        {props.item.edit === true &&
        <div className="main-input-game-div">
        <div className = "input-game-div">
            <h2>Progress</h2><input type="text" value={gameInfo.progress}name = "progress" onChange={editChangeHandler}/>
            <h2>Characters</h2><input type="text" value={gameInfo.characters}name = "characters" onChange={editChangeHandler}/>
            <h2>Rank</h2><input type="text" value={gameInfo.rank}name = "rank" onChange={editChangeHandler}/>
            <h2>username</h2><input type="text" value={gameInfo.usernames}name = "usernames" onChange={editChangeHandler}/>
            <h2>Other</h2><textarea type="text" value={gameInfo.other}name = "other" onChange={editChangeHandler}/>
            <button onClick={()=>{props.saveInfo(props.item.id,gameInfo.progress,  
                gameInfo.characters,
                gameInfo.rank,
                gameInfo.usernames,
                gameInfo.other)}}>Save</button>
            </div></div>
            }
            
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