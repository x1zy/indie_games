import { getGamesByCategory } from "../data/data-utils";
import { CardList } from "../components/CardsList/CardsList";

export default function pixelGames() {
  const pixelGames = getGamesByCategory("pixel");
  return (
    <main className={"main-inner"}>
      <CardList id="pixel" title="Pixel-Games" data={pixelGames} />
    </main>
  );
}
