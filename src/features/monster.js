const API_BASE_URL = "https://www.dnd5eapi.co/api/2014";

export async function searchMonsters(filterStr) {
  // Is it ideal to fetch all monsters and then filter? No. But unfortunately,
  // there is no robust filtering in this API.
  const monsters = await fetch(API_BASE_URL + "/monsters/")
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

export async function getMonsterByIndex(index) {
  return await fetch(API_BASE_URL + `/monsters/${index}`).then((response) =>
    response.json(),
  );
}
