import { getGamesByCategory } from "../data/data-utils";
import { CardList } from "../components/CardsList/CardsList";

export default function Tds() {
  const tdsGames = getGamesByCategory("TDS");
  return (
    <main className={"main-inner"}>
      <CardList id="tds" title="TDS" data={tdsGames} />
    </main>
  );
}
