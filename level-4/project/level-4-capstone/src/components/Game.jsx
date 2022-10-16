import React, {useContext, useState } from "react";
import {FaRegEdit } from "react-icons/fa"
import {RiDeleteBin5Line } from "react-icons/ri"
import {MMOContext} from "../mmoContext";





export default function Game(props) {
  
  const {saveInfo, editStatsHandler, showStats,cancel, removeFromProfile} = useContext(MMOContext)
  const [gameInfo, setGameInfo] = useState({
    progress: "",
    characters: "",
    rank: "",
    usernames: "",
    other: "",
  });
  const editChangeHandler = () => {
    const { name, value } = event.target;
    setGameInfo((prev) => ({ ...prev, [name]: value }));
  };

  const edit = (id) => {
    editStatsHandler(id);
    setGameInfo((prev) => ({
      ...prev,
      progress:props.item.progress,
      characters:props.item.characters,
      rank: props.item.rank,
      usernames:props.item.usernames,
      other: props.item.other

    }));
  };

  return (
    <div>
      {props.item.edit === true && (
        <div className="main-input-game-div">
          <div className="input-game-div">
            <h2>Progress</h2>
            <input
              type="text"
              value={gameInfo.progress}
              name="progress"
              onChange={editChangeHandler}
            />
            <h2>Characters</h2>
            <input
              type="text"
              value={gameInfo.characters}
              name="characters"
              onChange={editChangeHandler}
            />
            <h2>Rank</h2>
            <input
              type="text"
              value={gameInfo.rank}
              name="rank"
              onChange={editChangeHandler}
            />
            <h2>Username</h2>
            <input
              type="text"
              value={gameInfo.usernames}
              name="usernames"
              onChange={editChangeHandler}
            />
            <h2>Other</h2>
            <textarea       
            rows={5}     
            cols={33}
              type="text"
              value={gameInfo.other}
              name="other"
              onChange={editChangeHandler}
            /><div className={"edit-buttons-div"}>
            <button
              onClick={() => {
                saveInfo(
                  props.item.id,
                  gameInfo.progress,
                  gameInfo.characters,
                  gameInfo.rank,
                  gameInfo.usernames,
                  gameInfo.other
                );
              }}
            >
              Save
            </button>
            <button onClick={cancel}>Cancel</button></div>
          </div>
        </div>
      )}

      <div  onClick={() => {
            showStats(props.item.id);
          }} className="home-item-div">
            <div className="profile-list-title">
        <li >{props.item.title}</li></div>
        <FaRegEdit 
          className="edit-stats"
          onClick={() => {
            edit(props.item.id);
          }}
       
        />
        <img className="profile-list-img" src={props.item.thumbnail} />
    
        <RiDeleteBin5Line
          className="remove-game"
          onClick={() => {
            removeFromProfile(props.item.id);
          }}
      />
      </div>
    </div>
  );
}
