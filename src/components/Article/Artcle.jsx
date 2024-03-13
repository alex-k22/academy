import css from "./Article.module.scss";
import { TfiCalendar } from "react-icons/tfi";

const Article = ({ articles }) => {
  const { url, title, date, image } = articles;

  return (
    <li className={css.article}>
      <a href={url} target="blank">
        <img src={image} alt={title} className={css.image} />
        <div className={css.text}>
          <p className={css.date}>
            <TfiCalendar /> {date}
          </p>
          <h2 className={css.title}>{title}</h2>
        </div>
      </a>
    </li>
  );
};

export default Article;
