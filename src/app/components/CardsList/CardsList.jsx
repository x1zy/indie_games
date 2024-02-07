import { NewCardsList } from "./NewCardsList";
import { PopularCardsList } from "./PopularCardsList";

export const CardsList = () => {
  return (
    <div>
      <PopularCardsList />
      <NewCardsList />
    </div>
  );
};
