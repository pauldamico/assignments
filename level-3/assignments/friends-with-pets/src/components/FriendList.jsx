import friends from "../friends";
import Friend from "./Friend";

export default function FriendList (){
const friendList = friends.map((friend)=>{return(
 
    <Friend  key={friend.name}
    {...friend}
    />
)})



    return(
        <div className="friendlistdiv" >
          <section>{friendList}</section>  
        </div>
    )
}