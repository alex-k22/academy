import { useState } from "react";
import css from "./Article.module.scss";
import { TfiCalendar } from "react-icons/tfi";
import defaultImage from '../../assets/default-image-2024.png';


const Article = ({ articles }) => {
  const { url, title, date, image } = articles;
  const [imgSrc, setImgSrc] = useState(image);

  const handleError = () => {
    setImgSrc(defaultImage);
  }

 
  return (
    <li className={css.article}>
      <a href={url} target="blank">
        <img src={imgSrc} alt={title} className={css.image} onError={handleError}/>
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
