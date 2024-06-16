import { useState } from "react";
import css from "../VideoCard/VideoCard.module.scss";
import { MdCalendarToday, MdOutlinePlayCircleOutline } from "react-icons/md";
import defaultImage from "../../assets/img/default-image-2024.png";
import FormatDate from "../../helpers/FormatDate";

const VideoCard = ({ videos }) => {
  const { date, type, url, title, image } = videos;
  const [imgSrc, setImgSrc] = useState(image);

  const handleError = () => {
    setImgSrc(defaultImage);
  };

  return (
    <li className={css.article}>
      <a href={url} target="blank">
        <div className={css.imgWrapper}>
          <img
            src={imgSrc}
            alt={title}
            className={css.image}
            onError={handleError}
          />
          <MdOutlinePlayCircleOutline className={css.playicon} size={80} />
        </div>
        <div className={css.text}>
          <h2 className={css.title}>{title}</h2>
          <div className={css.textwrapper}>
            <p className={css.date}>
              <MdCalendarToday /> {FormatDate(new Date(date))}
            </p>
            <p className={css.date}>{type}</p>
          </div>
        </div>
      </a>
    </li>
  );
};

export default VideoCard;
