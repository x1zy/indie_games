import { getGamesByCategory } from "../data/data-utils";
import { CardList } from "../components/CardsList/CardsList";

export default function Runners() {
  const runnersGames = getGamesByCategory("runner");
  return (
    <main className={"main-inner"}>
      <CardList id="runner" title="Ранеры" data={runnersGames} />
    </main>
  );
}
