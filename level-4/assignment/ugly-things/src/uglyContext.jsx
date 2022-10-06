import React, { useState, useEffect } from "react";
import axios from "axios";

const UglyContext = React.createContext();

const UglyContextProvider = (props) => {
  const [uglyData, setUglyData] = useState({
    title: "",
    description: "",
    imgUrl: "",
  });
  const [uglyList, setUglyList] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.vschool.io/pauldamico/thing")
      .then((res) =>
        setUglyList((prev) => [
          ...res.data
            .map((newItems) => ({ ...newItems, value: false }))
            .reverse(),
        ])
      )
      .catch((err) => console.log(err));
  }, []);

  const uglySubmitHandler = (event) => {
    event.preventDefault();
    postAPIData(uglyData);
    setUglyData((prev) => ({
      ...prev,
      title: "",
      description: "",
      imgUrl: "",
    }));
  };

  const uglyChangeHandler = (e) => {
    const { name, value } = e.target;
    setUglyData((prev) => ({ ...prev, [name]: value }));
  };

  const deleteUglyItem = (id) => {
    axios
      .delete(`https://api.vschool.io/pauldamico/thing/${id}`)
      .then(
        setUglyList((prev) =>
          prev.filter((item) => item._id != id && { ...item })
        )
      )
      .catch((err) => console.log(err));
  };
  function postAPIData(postItem) {
    axios
      .post("https://api.vschool.io/pauldamico/thing/", postItem)
      .then((res) =>
        setUglyList((prev) => {
          return [{ ...res.data, value: false }, ...prev];
        })
      )
      .catch((err) => console.log(err));
  }

  return (
    <UglyContext.Provider
      value={{
        uglyData: uglyData,
        uglyList: uglyList,
        setUglyList: setUglyList,
        deleteUglyItem: deleteUglyItem,
        uglyChangeHandler: uglyChangeHandler,
        uglySubmitHandler: uglySubmitHandler,
      }}
    >
      {props.children}
    </UglyContext.Provider>
  );
};

export { UglyContext, UglyContextProvider };
