import Styles from "./CardList.module.css";
import { NewCardsFragment } from "./NewCardsFragment";

export const NewCardsList = () => {
  return (
    <section className={Styles["list-section"]}>
      <h2 className={Styles["list-section__title"]} id="new">
        Новинки
      </h2>
      <ul className={Styles["cards-list"]}>
        <NewCardsFragment
          imageUrl="https://code.s3.yandex.net/teens/pindie-games/go-away/cover.jpg"
          title="Go Away"
          description="Управляй автомобилем, избегая аварий и перепрыгивая препятствия на пути к следующему уровню."
          author="Mahisto"
          votes="20"
        />
        <NewCardsFragment
          imageUrl="https://code.s3.yandex.net/teens/pindie-games/gunner/cover.png"
          title="G.U.N.N.E.R."
          description="Продержись как можно дольше, отбиваясь от врагов, которых будет становиться всё больше."
          author="IDKWIAm"
          votes="10"
        />
        <NewCardsFragment
          imageUrl="https://code.s3.yandex.net/teens/pindie-games/space-terror/cover.png"
          title="Space Terror"
          description="Лети как можно дальше в космическом пространстве, уничтожая всё на своём пути."
          author="IDKWIAm"
          votes="20"
        />
        <NewCardsFragment
          imageUrl="https://code.s3.yandex.net/teens/pindie-games/square-slayer/cover.png"
          title="Square Slayer"
          description="Уворачивайся и отстреливайся от озлобленных квадратов и собирай жизни для перехода на следующий уровень."
          author="niclan"
          votes="10"
        />
      </ul>
    </section>
  );
};
