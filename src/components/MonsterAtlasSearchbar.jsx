import "./MonsterAtlasSearchbar.css";

const MonsterAtlasSearchbar = ({ searchCallback }) => {

  function handleKeyDown(evt) {
    if (evt.key === 'Enter') {
      searchCallback(evt.target.value);
    }
  }

  return (
    <input className="monster-atlas-searchbar" type="text" onKeyDown={handleKeyDown} />
  );
};

export default MonsterAtlasSearchbar;