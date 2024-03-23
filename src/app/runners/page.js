import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../components/CardsList/CardsList";

export default function Runners() {
  const runnersGames = getGamesByCategory("runner");
  return (
    <main className={"main-inner"}>
      <CardsList id="runner" title="Ранеры" data={runnersGames} />
    </main>
  );
}
