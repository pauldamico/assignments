import React, { useContext } from "react";
import { UglyContext } from "../uglyContext";

export default function UglyThing() {
  const { uglyList } = useContext(UglyContext);
  const test = uglyList.map((item) => (
    <div>
      <h1 className="ugly-title">{item.title}</h1>
      <h1 className="ugly-description">{item.description}</h1>
      <img className="ugly-img" src={item.imgUrl} />
      <button>Edit</button>
    </div>
  ));

  return <>{test}</>;
}
