// components/CardSet/CardSet.jsx
import Article from "../Article/Artcle";
import css from "./CardSet.module.scss";

const CardSet = ({ news }) => {
  return (
    <ul className={css.set}>
      {news.map((newsItem) => {
        return <Article news={newsItem} key={newsItem.id || newsItem.url} />
      })}
    </ul>
  );
};

export default CardSet;