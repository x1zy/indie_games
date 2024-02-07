import Styles from "./CardList.module.css";

export const NewCardsFragment = ({
  imageUrl,
  title,
  description,
  author,
  votes,
}) => {
  return (
    <li className={Styles["cards-list__item"]}>
      <a href="/game-id.html" className={Styles["card-list__link"]}>
        <article className={Styles["card"]}>
          <img src={imageUrl} alt="" className={Styles["card__image"]} />
          <div className={Styles["card__content-block"]}>
            <h3 className={Styles["card__title"]}>{title}</h3>
            <p className={Styles["card__description"]}>{description}</p>
            <div className={Styles["card__info-container"]}>
              <p className={Styles["card__author"]}>
                Автор: <span className={Styles["card__accent"]}>{author}</span>
              </p>
              <p className={Styles["card__votes"]}>
                Голосов на сайте:{" "}
                <span className={Styles["card__accent"]}>{votes}</span>
              </p>
            </div>
          </div>
        </article>
      </a>
    </li>
  );
};
