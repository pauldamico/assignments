import react, { useContext } from "react";
import Button from "./reusuable/Button";
import {UglyContext} from "../uglyContext";

export default function Body() {
  const {uglyData, uglyChangeHandler, uglySubmitHandler} = useContext(UglyContext);


  return (
    <div>
      <form onSubmit={uglySubmitHandler} className="form">
        <div>
          <label className="imgurl-label">Enter URL</label>
          <input
          required
            className="url-input"
            name="imgUrl"
            value={uglyData.imgUrl}
            type="text"
            onChange={uglyChangeHandler}
          />
        </div>
        <div>
          <label className="title-label">Enter Title</label>
          <input
              required
            className="title-input"
            name="title"
            value={uglyData.title}
            type="text"
            onChange={uglyChangeHandler}
          />
        </div>
        <div>      
          <label className="description-label">Description</label>
          <input
              required
            className="description-input"
            name="description"
            value={uglyData.description}
            type="text"
            onChange={uglyChangeHandler}
          />
        </div>
        <div className="button-div">
          <Button>Add Ugly Thing</Button>
        </div>
      </form>
    </div>
  );
}
