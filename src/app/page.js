import { getGamesByCategory } from "./data/data-utils.js";

import { Banner } from "./components/Banner/Banner";
import { CardList } from "./components/CardsList/CardsList";
import { Promo } from "./components/Promo/Promo";

export default function Home() {
  const popularGames = getGamesByCategory("popular");
  const newGames = getGamesByCategory("new");

  return (
    <main>
      <Banner />
      <CardList id="popular" title="Популярные" data={popularGames} />
      <CardList id="new" title="Новинки" data={newGames} />
      <Promo />
    </main>
  );
}
