import { getGamesByCategory } from "../data/data-utils";
import { CardList } from "../components/CardsList/CardsList";
export default function New() {
  const newGames = getGamesByCategory("new");
  return (
    <main className={"main-inner"}>
      <CardList id="new" title="Новинки" data={newGames} />
    </main>
  );
}
