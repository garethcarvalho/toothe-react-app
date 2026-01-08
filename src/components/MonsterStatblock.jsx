import { useEffect } from "react";

import "./MonsterStatblock.css";
import { getMonsterImageUrl } from "../features/monster";

const MonsterStatblock = ({ monsterData: monster }) => {
  // Load the background image.
  // useEffect(() => {
  //   document.querySelector(`#${monster.index}-statblock`)
  //       .style.backgroundImage = `url(${getMonsterImageUrl(monster)})`;
  // }, []);


  // Armor Class.
  const armorClass = monster["armor_class"][0];
  let armorClassContent = armorClass["value"].toString();

  if (armorClass["type"] === "armor") {
    const armorNames = armorClass["armor"].map(armor => armor["name"]);
    armorClassContent += ` (${armorNames.join(", ")})`;
  }

  // Physical Description.
  let physicalDescription = `${monster["size"]} ${monster["type"]}`;
  if (monster["subtype"]) {
    physicalDescription += ` (${monster["subtype"]})`;
  }

  // Hit Points.
  let hitPointsContent = `${monster["hit_points"]} (${monster["hit_dice"]})`;

  // Speed.
  const speed = monster["speed"];
  let speedContent = speed["walk"];

  for (let speedType in speed) {
    if (speedType !== "walk") {
      speedContent += `, ${speedType} ${speed[speedType]}`;
    }
  }

  // Skills & Saving Throws.
  let skills = [];
  let savingThrows = [];
  for (let proficiency of monster["proficiencies"]) {
    const name = proficiency["proficiency"].name;
    if (name.startsWith("Skill")) {
      skills.push(`${name.substr(7)} +${proficiency["value"]}`);
    }

    else if (name.startsWith("Saving Throw")) {
      savingThrows.push(`${name.substr(14)} +${proficiency["value"]}`);
    }
  }

  let skillsContent;
  if (skills.length > 0) {
    skillsContent = <div><span className="stat-title">Skills</span> {skills.join(", ")}</div>
  }

  let savingThrowsContent;
  if (savingThrows.length > 0) {
    savingThrowsContent = <div><span className="stat-title">Saving Throws</span> {savingThrows.join(", ")}</div>
  }

  const languages = monster["languages"];
  let languagesContent;
  if (languages) {
    languagesContent = <div><span className="stat-title">Languages</span> {languages.trim()}</div>
  }


  return (
    <div className="monster-statblock" id={`${monster.index}-statblock`}>
      <div>{physicalDescription}, {monster["alignment"]}</div>
      <hr />

      <div><span className="stat-title">Armor Class</span> {armorClassContent}</div>
      <div><span className="stat-title">Hit Points</span> {hitPointsContent}</div>
      <div><span className="stat-title">Speed</span> {speedContent}</div>
      <hr />

      <table className="stats-table">
        <thead>
          <tr>
            <th>STR</th>
            <th>DEX</th>
            <th>CON</th>
            <th>INT</th>
            <th>WIS</th>
            <th>CHA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{monster["strength"]}</td>
            <td>{monster["dexterity"]}</td>
            <td>{monster["constitution"]}</td>
            <td>{monster["intelligence"]}</td>
            <td>{monster["wisdom"]}</td>
            <td>{monster["charisma"]}</td>
          </tr>
        </tbody>
      </table>
      <hr/>

      {savingThrowsContent}
      {skillsContent}
      {languagesContent}
    </div>
  );
}

export default MonsterStatblock;
