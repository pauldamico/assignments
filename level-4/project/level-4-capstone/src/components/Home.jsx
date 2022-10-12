import Game from "./Game"
export default function Home(props) {
    
    const listProfileData = props.mmoData.map(
        (item) =>
          item.addedToProfile === true &&
          <div key={item.id}>
        <Game item={item} editStatsHandler={props.editStatsHandler}/>
        {/* <h1 className="home-div-right">test</h1> */}
        </div>
            )

  return (
    <div className="home-div">
      <div className="home-div-left">
        <h5>My Games</h5>
        <div className="profile-list-div">
 {listProfileData}
        </div>
      </div>
      <div className="home-div-right">
     {props.listGameInfo}
      </div>
    </div>
  );
}
