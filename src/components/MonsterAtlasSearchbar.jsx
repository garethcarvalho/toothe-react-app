

const MonsterAtlasSearchbar = ({ searchCallback }) => {

  function handleKeyDown(evt) {
    if (evt.key === 'Enter') {
      searchCallback(evt.target.value);
    }
  }

  return (
    <input type="text" onKeyDown={handleKeyDown} />
  );
};

export default MonsterAtlasSearchbar;