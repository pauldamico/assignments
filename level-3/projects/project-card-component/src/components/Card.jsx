import katie from "../images/katie.png";
import wedding from "../images/wedding.png";
import bike from "../images/bike.png";
import star from "../images/star.png";

export default function Card() {
  const experiences = [
    {
      soldOut: true,
      online: true,
      description: "Life lessons with Katie Zaferes",
      rating: 5,
      cost: 136,
      country: "USA",
      comments: 6,
      image: katie,
    },
    {
      soldOut: false,
      online: true,
      description: "Learn wedding photography",
      rating: 5,
      cost: 125,
      country: "USA",
      comments: 30,
      image: wedding,
    },
    {
      soldOut: false,
      online: false,
      description: "Group Mountain Biking",
      rating: 4.8,
      cost: 50,
      country: "USA",
      comments: 2,
      image: bike,
    },
  ];

  const cardElements = experiences.map((experience) => {
    return (
      <div className="card-div">
        <img src={experience.image} />
        {experience.online && (
          <button>{experience.soldOut === true ? "Sold Out" : "Online"}</button>
        )}
        <div className="bottom-info-div">
          <div className="star-line">
            <span>
              <img src={star} />
            </span>
            <span> {experience.rating}</span>
            <span className="comments">({experience.comments})</span>
            <li> {experience.country}</li>
          </div>
          <div className="description">{experience.description}</div>
          <div className="cost">
            <b>From ${experience.cost} </b> / person
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="all-card-div">
      {cardElements}
      {cardElements}
      {/* <div className="card-div">
        <img src={experiences[0].image} />
        {experiences[0].online && (
          <button>
            {experiences[0].soldOut === true ? "Sold Out" : "Online"}
          </button>
        )}
        <div className="bottom-info-div">
          <div className="star-line">
            <span>
              <img src={star} />
            </span>
            <span> {experiences[0].rating}</span>
            <span className="comments">({experiences[0].comments})</span>
            <li> {experiences[0].country}</li>
          </div>
          <div className="description">{experiences[0].description}</div>
          <div className="cost">
            <b>From ${experiences[0].cost} </b> / person
          </div>
        </div>
      </div>
      <div className="card-div">
        <img src={experiences[1].image} />
        {experiences[1].online && (
          <button>
            {experiences[1].soldOut === true ? "Sold Out" : "Online"}
          </button>
        )}
        <div className="bottom-info-div">
          <div className="star-line">
            <span>
              <img src={star} />
            </span>
            <span> {experiences[1].rating}</span>
            <span className="comments">({experiences[1].comments})</span>
            <li> {experiences[1].country}</li>
          </div>

          <div className="description">{experiences[1].description}</div>
          <div className="cost">
            <b>From ${experiences[1].cost} </b>/ person
          </div>
        </div>{" "}
      </div>
      <div className="card-div">
        <img src={experiences[2].image} />
        {experiences[2].online && (
          <button>
            {experiences[2].soldOut === true ? "Sold Out" : "Online"}
          </button>
        )}
        <div className="bottom-info-div">
          <div className="star-line">
            <span>
              <img src={star} />
            </span>
            <span> {experiences[2].rating}</span>
            <span className="comments">({experiences[2].comments})</span>
            <li> {experiences[2].country}</li>
          </div>
          <div className="description">{experiences[2].description}</div>
          <div className="cost">
            <b>From ${experiences[2].cost} </b> / person
          </div>
        </div>
      </div> */}
    </div>
  );
}
