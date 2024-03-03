import { getGamesByCategory } from "../data/data-utils";
import { CardList } from "../components/CardsList/CardsList";

export default function Popular() {
  const popularGames = getGamesByCategory("popular");
  return (
    <main className={"main-inner"}>
      <CardList id="popular" title="Популярные игры" data={popularGames} />
    </main>
  );
}
