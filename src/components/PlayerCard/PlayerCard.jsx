import css from "./PlayerCard.module.scss";

const PlayerCard = ( {playerInfo} ) => {
    const { url, title, image } = playerInfo;
    return (
        <li className={css.article}>
          <a href={url} target="blank">
            <img src={image} alt={title} className={css.image}/>
            <div className={css.text}>

              <h2 className={css.title}>{title}</h2>
              
            </div>
          </a>
        </li>
      );
}

export default PlayerCard;