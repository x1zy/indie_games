import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../components/CardsList/CardsList";

export default function pixelGames() {
  const pixelGames = getGamesByCategory("pixel");
  return (
    <main className={"main-inner"}>
      <CardsList id="pixel" title="Pixel-Games" data={pixelGames} />
    </main>
  );
}
