const API_BASE_URL = "https://www.dnd5eapi.co";

export async function searchMonsters(filterStr) {
  const monsters = await fetch(API_BASE_URL + "/api/2014/monsters/")
    .then((response) => response.json())
    .then((response) => response.results);

  if (filterStr) {
    filterStr = filterStr.toLowerCase();
    return monsters.filter(
      (monster) =>
        monster.name.includes(filterStr) || monster.index.includes(filterStr),
    );
  }
  return monsters;
}

export async function getMonsterByIndex(index) {
  return await fetch(API_BASE_URL + `/api/2014/monsters/${index}`).then((response) =>
    response.json(),
  );
}

export function getMonsterImageUrl(monster) {
  return API_BASE_URL + monster.image;
}
