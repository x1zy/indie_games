import { getGamesByCategory } from "../data/data-utils";
import { CardList } from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";

export default async function New() {
  const newGames = await getGamesByCategory(endpoints.games, 'new')
  return (
    <main className={"main-inner"}>
      <CardList id="new" title="Новинки" data={newGames} />
    </main>
  );
}

const normalizeDataObject = (obj) => {
  return {
    ...obj,
    category: obj.categories,
    users: obj.users_permissions_users,
  };
};

export const normalizeData = (data) => {
  return data.map((item) => {
    return normalizeDataObject(item)
  })
}
