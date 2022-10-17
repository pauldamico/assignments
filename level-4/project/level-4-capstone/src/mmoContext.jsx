import React, { useState, createContext, useEffect, useRef } from "react";
import axios from "axios";
const MMOContext = createContext();
function MMOContextProvider(props) {
  
  const [mmoData, setMmoData] = useState([]);
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
    if (localStorage.getItem("myData") === null) {
      console.log("wrong");
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/https://www.mmobomb.com/api1/games",
          {
            headers: {
              "X-Requested-With": "origin",
            },
          }
        )
        .then((res) =>
          setMmoData((prev) => [
            ...res.data.map((item) => ({
              ...item,
              edit: false,
              addedToProfile: false,
              showStats: false,
              progress: "",
              characters: "",
              rank: "",
              usernames: "",
              other: "",
            })),
          ])
        )
        .catch((err) => console.log(err));
    } else if (localStorage.getItem("myData") != null && count.current > 1) {
      console.log("get");
      JSON.parse(localStorage.getItem("myData"));
      setMmoData(JSON.parse(localStorage.getItem("myData")));
    }
  }, []);

  useEffect(() => {
    if (count.current > 1) {
      localStorage.setItem("myData", JSON.stringify(mmoData));
      console.log("set");
    }
  }, [mmoData]);

  const saveInfo = (id, progress, characters, rank, usernames, other) => {
    // setMmoData(prev=>prev.map(item=>item.id === id ? {...item, edit:false }: item))
    setMmoData((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              edit: false,
              progress: progress,
              characters: characters,
              rank: rank,
              usernames: usernames,
              other: other,
            }
          : item
      )
    );
  };
  function editStatsHandler(id) {
    setMmoData((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, edit: !item.edit }
          : { ...item, edit: false }
      )
    );
  }
  function showStats(id) {
    setMmoData((prev) => prev.map((item) => ({ ...item, showStats: false })));
    setMmoData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, showStats: true } : item))
    );
  }
  const cancel = () => {
    setMmoData((prev) => prev.map((item) => ({ ...item, edit: false })));
  };
  function removeFromProfile(id) {
    setMmoData((prev) => prev.map((item) => ({ ...item, showStats: false })));
    setMmoData((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, addedToProfile: !item.addedToProfile }
          : item
      )
    );
  }
  return (
    <MMOContext.Provider
      value={{
        mmoData: mmoData,
        setMmoData: setMmoData,
        count: count,
        saveInfo: saveInfo,
        editStatsHandler: editStatsHandler,
        showStats: showStats,
        removeFromProfile: removeFromProfile,
        cancel: cancel,
      }}
    >
      {props.children}
    </MMOContext.Provider>
  );
}

export { MMOContext, MMOContextProvider };
