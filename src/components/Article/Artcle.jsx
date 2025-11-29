import { useState } from "react";
import css from "./Article.module.scss";
import { MdCalendarToday } from "react-icons/md";
import FormatDate from "../../helpers/FormatDate";
import defaultImage from '../../assets/img/default-image-2024.png';

const Article = ({ news }) => {
  const { url, title, date, image, type = 'external' } = news; // Добавляем type со значением по умолчанию
  const [imgSrc, setImgSrc] = useState(image);

  const handleError = () => {
    setImgSrc(defaultImage);
  }

  // Определяем атрибуты ссылки в зависимости от типа новости
  const linkProps = type === 'internal' 
    ? { href: url } // Внутренняя новость - открывается в той же вкладке
    : { href: url, target: "_blank", rel: "noopener noreferrer" }; // Внешняя новость - в новой вкладке
 
  return (
    <li className={css.article}>
      <a {...linkProps}>
        <img src={imgSrc} alt={title} className={css.image} onError={handleError}/>
        <div className={css.text}>
          <p className={css.date}>
            <MdCalendarToday /> {FormatDate(new Date(date))}
          </p>
          <h2 className={css.title}>{title}</h2>
        </div>
      </a>
    </li>
  );
};

export default Article;