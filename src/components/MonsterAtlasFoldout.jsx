import { useState } from "react";
import { getMonsterByIndex } from "../features/monster";

import MonsterStatblock from "./MonsterStatblock";

import "./MonsterAtlasFoldout.css";

const MonsterDataLoadState = {
  Unloaded: 0,
  Loading: 1,
  Loaded: 2
};

const MonsterAtlasFoldout = ({ title, expanded = false, index }) => {
  const [isExpanded, setExpanded] = useState(expanded);
  const [monsterDataLoadState, setMonsterDataLoadState] = useState(MonsterDataLoadState.Unloaded);
  const [monsterData, setMonsterData] = useState(null);

  function handleClick() {
    console.log(title, " handle clicked");
    if (!isExpanded && monsterDataLoadState === MonsterDataLoadState.Unloaded) {
      setMonsterDataLoadState(() => MonsterDataLoadState.Loading);
      getMonsterByIndex(index)
        .then(response => {
          setMonsterData(response);
          setMonsterDataLoadState(() => MonsterDataLoadState.Loaded);
        })
        .catch(error => {
          console.error("Error getting monster data by index for foldout. ", error);
          setMonsterDataLoadState(() => MonsterDataLoadState.Unloaded);
        })
    }

    setExpanded(!isExpanded);
  }

  const content = monsterDataLoadState === MonsterDataLoadState.Loaded ?
    <MonsterStatblock monsterData={monsterData} /> :
    <div>Loading...</div>;

  return (
    <div onClick={handleClick} className="foldout">
      <div className="foldout-title">{title}</div>
      <div className="foldout-content-container">
        <div className={`foldout-content ${isExpanded ? "expanded" : "collapsed"}`}>
          {content}
        </div>
      </div>
    </div>
  );
};

export default MonsterAtlasFoldout;
