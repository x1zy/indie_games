import { getGamesByCategory } from "../data/data-utils";
import { CardList } from "../components/CardsList/CardsList";

export default function Shooters() {
  const shootersGames = getGamesByCategory("shooter");
  return (
    <main className={"main-inner"}>
      <CardList id="shooter" title="Шутеры" data={shootersGames} />
    </main>
  );
}
