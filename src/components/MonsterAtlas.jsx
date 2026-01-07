import { useState, useEffect } from "react";
import { searchMonsters } from "../features/monster";

import MonsterAtlasFoldout from "./MonsterAtlasFoldout";
import MonsterAtlasSearchbar from "./MonsterAtlasSearchbar";

import "./MonsterAtlas.css";

const MonsterAtlas = () => {
  const [atlas, setAtlas] = useState([]);

  function searchAtlasCallback(searchFilter = "") {
    searchMonsters(searchFilter).then((monsters) => setAtlas(monsters));
  }

  useEffect(() => {
    searchAtlasCallback();
  }, []);

  return (
    <div className="window monster-atlas">
      <div className="window-header">
        <MonsterAtlasSearchbar searchCallback={searchAtlasCallback} />
      </div>
      <div className="window-content">
        {atlas.map((monster) => {
          return <MonsterAtlasFoldout title={monster.name} index={monster.index} key={monster.index} />;
        })}
      </div>
    </div>
  );
};

export default MonsterAtlas;
