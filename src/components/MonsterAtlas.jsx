import { useState, useEffect } from "react";
import { searchMonsters } from "../features/monster";

import MonsterAtlasEntry from "./MonsterAtlasEntry";
import MonsterAtlasSearchbar from "./MonsterAtlasSearchbar";

// import "./MonsterAtlas.css";

const MonsterAtlas = () => {
  const [atlas, setAtlas] = useState([]);

  useEffect(() => {
    searchAtlasCallback();
  }, []);


  function searchAtlasCallback(searchFilter = '') {
    searchMonsters(searchFilter).then((monsters) => setAtlas(monsters));
  }


  return (
    <>
      <MonsterAtlasSearchbar searchCallback={searchAtlasCallback} />
      {atlas.map((monster) => {
        return (
          <MonsterAtlasEntry key={monster.index} monsterData={monster} />
        );
      })}
    </>
  );
};

export default MonsterAtlas;



