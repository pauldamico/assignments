import Game from "./Game";
export default function Home(props) {
  const listProfileData = props.mmoData.map(
    (item) =>
      item.addedToProfile === true && (
        <div className="game-comp" key={item.id}>
          <Game
          cancel={props.cancel}
          showStats={props.showStats}
            saveInfo={props.saveInfo}
            item={item}
            mmoData={props.mmoData}
            editStatsHandler={props.editStatsHandler}
            removeFromProfile={props.removeFromProfile}
          />
        </div>
      )
  );

  const gameStats = props.mmoData.map(
    (item) =>
      item.showStats === true &&  (
        <div key={item.id}>
          <h1 className="game-stat-title">{item.title}</h1>
          <div className="my-game-stats-div">
            <div>
              <h2>Progress: </h2>
              <h3>{item.progress}</h3>
            </div>
            <div>
              <h2>Characters: </h2>
              <h3>{item.characters}</h3>
            </div>
            <div>
              <h2>Rank: </h2>
              <h3>{item.rank}</h3>
            </div>
            <div>
              <h2>Username: </h2>
              <h3>{item.usernames}</h3>
            </div>
            <div>
              <h2>Other:</h2>
              <h3 className="other">{item.other}</h3>
            </div>
          </div>
        </div>
      )
  );
  return (
    <div className="home-div">
      {/* <div className="home-div-left">
        <h5>My Games</h5>
        <div className="profile-list-div"> */}
      <div className="home-div-left">
        <h5>My Games</h5>
        {listProfileData}
      </div>

      <div className="home-div-right">{gameStats}</div>
    </div>
  );
}
