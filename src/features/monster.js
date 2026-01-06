const API_BASE_URL = "https://www.dnd5eapi.co";

export async function searchMonsters(filterStr) {
  // Is it ideal to fetch all monsters and then filter? No. But unfortunately,
  // there is no robust filtering in this API.
  const monsters = await fetch(API_BASE_URL + "/api/2014/monsters/")
    .then((response) => response.json())
    .then((response) => response.results);

  if (filterStr) {
    return monsters.filter(
      (monster) =>
        monster.name.includes(filterStr) || monster.index.includes(filterStr),
    );
  }
  return monsters;
}
