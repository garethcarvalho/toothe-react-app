import { useState } from "react";
import { getMonsterByIndex } from "../features/monster";

import MonsterStatblock from "./MonsterStatblock";
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
  );
};

export default MonsterAtlasFoldout;
