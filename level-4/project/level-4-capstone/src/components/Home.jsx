export default function Home(props) {



  return (
    <div className="home-div">
      <div className="home-div-left">
        <h5>My Games</h5>
        <div>
     {props.listProfileData}
        </div>
      </div>
      <div className="home-div-right">
        <h2>Progress</h2>
        <h2>Characters</h2>
        <h2>Rank</h2>
        <h2>username</h2>
        <h2>Other</h2>
      </div>
    </div>
  );
}
