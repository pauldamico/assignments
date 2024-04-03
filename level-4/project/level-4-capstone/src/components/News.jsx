import React, {useState, useEffect} from "react";
import axios from "axios";
export default function News(){

    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        axios
          .get(
            "http://localhost:3000/latestnews",

          )
          .then((res) => setNewsData((prev) => res.data))
          .catch((err) => console.log(err));
      }, []);

      const listNewsData = newsData.map(
        (
          newsItem ///move all news related items to news
        ) => (
          <div className="news-list-div" key={newsItem.id}>
              <div className="news-list-img">
              <img height="200px" width="300px" src={newsItem.main_image} />
            </div>
            <div>
            <a href={newsItem.article_url}>
              <h3>{newsItem.title}</h3>{" "}
            </a>
    
            <p>{newsItem.short_description}</p>
            </div>
          
          </div>
        )
      );

    return(<div>
        {listNewsData}
    </div>)
}