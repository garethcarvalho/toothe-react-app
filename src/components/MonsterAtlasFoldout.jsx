import { useState } from "react";
import { getMonsterByIndex } from "../features/monster";

import MonsterStatblock from "./MonsterStatblock";

// import "./MonsterAtlasFoldout.css";
import Foldout from "./common/Foldout";

const MonsterDataLoadState = {
  Unloaded: 0,
  Loading: 1,
  Loaded: 2
};

const MonsterAtlasFoldout = ({ title, index }) => {
  const [monsterDataLoadState, setMonsterDataLoadState] = useState(MonsterDataLoadState.Unloaded);
  const [monsterData, setMonsterData] = useState(null);

  function onFoldoutExpandToggled(expanded) {
    if (expanded && monsterDataLoadState === MonsterDataLoadState.Unloaded) {
      console.log("Loading statblock for", title);
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
  }

  const content = monsterDataLoadState === MonsterDataLoadState.Loaded ?
    <MonsterStatblock monsterData={monsterData} /> :
    <div>Loading...</div>;

  return (
    <Foldout caption={title} expandToggleCallback={onFoldoutExpandToggled}>
      {content}
    </Foldout>
  )
  // return (
  //   <div onClick={handleClick} className="foldout">
  //     <div className="foldout-title">{title}</div>
  //     <div className="foldout-content-container">
  //       <div className={`foldout-content ${isExpanded ? "expanded" : "collapsed"}`}>
  //         {content}
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default MonsterAtlasFoldout;
