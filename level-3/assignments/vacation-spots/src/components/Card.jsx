export default function Card(props) {
  let dollarSign;

  if (props.price < 500) {
    dollarSign = "$";
  } else if (props.price > 500 && props.price < 1000) {
    dollarSign = "$$";
  } else {
    dollarSign = "$$$";
  }

  return (<div>

    <div className="card-div">
    <div className = "img-div">
    <img src = {props.imgUrl}/>
    </div>
      <div
        style={{
          backgroundColor:
            props.timeToGo === "Winter"
              ? "lightblue"
              : props.timeToGo === "Spring"
              ? "lightgreen"
              : props.timeToGo === "Summer"
              ? "red"
              : "orange",
        }}
        className="card-div-2"
      >
       
        <div className="info">
        <div className="dollar-place-div">
        <section className="dollar-sign">({dollarSign})</section>
        <h1 className="title">{props.place}</h1></div>
        <h3 className="price">Cost: {props.price}</h3>
        <h3 className="when-to-go">When to visit {props.place}? ({props.timeToGo})</h3>
        <h3 className="description">{props.description}</h3>
        </div>
      </div>
    </div>
    </div>
  );
}
