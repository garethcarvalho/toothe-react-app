import { useState } from "react";


const MonsterAtlasEntry = ({ monsterData }) => {
  const [expanded, setExpanded] = useState(false);

  function handleClick() {
    setExpanded(!expanded);
  }

  // TODO: Fetch individual monster data when expanding the atlas entries.
  return (
    <div onClick={(handleClick)} className="foldout">
      <div className="foldout-title">{monsterData.name}</div>
      <div className={`foldout-content ${expanded ? "expanded" : ""}`}>
        <div>
          <span>{`${monsterData.size} ${monsterData.type}`}</span>
        </div>
      </div>
    </div>
  );
};

export default MonsterAtlasEntry;
