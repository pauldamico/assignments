import map from "../images/map.png";
export default function Card(props) {
  console.log(props);

  return (
    <div className="card-div">
      <div className="image-div">
        <img className="image" src={props.imageUrl} />
      </div>
      <div className="body-div">
        <div className="location-div">
          <section className="location">
            <img className="img-map" src={map} />
            {props.location}
          </section>
          <a className="google-maps" href={props.googleMapsUrl}>
       
            View on Google Maps
          </a>
        </div>
        <h1 className="title">{props.title}</h1>
        <h5 className="dates">
          {props.startDate} - {props.endDate}
        </h5>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}
