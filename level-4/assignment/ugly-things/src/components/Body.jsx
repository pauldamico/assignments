import react, { useContext } from "react";
import Button from "./reusuable/Button";
import { UglyContext } from "../uglyContext";

export default function Body() {
  const {uglyData, uglyChangeHandler, uglySubmitHandler} = useContext(UglyContext);


  return (
    <div>
      <form onSubmit={uglySubmitHandler} className="form">
        <div>
          <label>Enter URL</label>
          <input
            className="url-input"
            name="imgUrl"
            value={uglyData.imgUrl}
            type="text"
            onChange={uglyChangeHandler}
          />
        </div>
        <div>
          <label>Enter Title</label>
          <input
            className="title-input"
            name="title"
            value={uglyData.title}
            type="text"
            onChange={uglyChangeHandler}
          />
        </div>
        <div>      
          <label>Description</label>
          <input
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
