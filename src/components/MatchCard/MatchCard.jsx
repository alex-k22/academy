import css from "./MatchCard.module.scss";
import {
  IoIosPin,
  IoMdFootball,
  IoMdInformationCircleOutline,
  IoIosVideocam,
  IoIosLink,
} from "react-icons/io";
import FormatDate from "../../helpers/FormatDate";
import defaultLogo from '../../assets/img/logo/default-logo.png';

const MatchCard = ({ results }) => {
  const {
    team1,
    team2,
    place,
    competition,
    date,
    team1Score,
    team2Score,
    goals,
    reportURL,
    videoURL,
    matchInfo,
    team1Logo,
    team2Logo,
  } = results;

  
  return (
    <li className={css.card}>
      <div className={css.cardTitle}>
        <div>{FormatDate(new Date(date))}</div>
        <div>{competition}</div>
      </div>
      <div className={css.matchResult}>
        <div className={css.team1}>
          {team1}
          <img src={team1Logo || defaultLogo} alt={team1} className={css.clubLogo} />
        </div>
        <div>
          <div className={css.score}>
            <div className={css.scoreDigit}>{team1Score}</div>
            <div className={css.scoreDigit}>{team2Score}</div>
          </div>
        </div>
        <div className={css.team2}>
          <img src={team2Logo || defaultLogo} alt={team2} className={css.clubLogo} />
          {team2}
        </div>
      </div>

      {matchInfo && (
        <div className={css.matchInfo}>
          <IoMdInformationCircleOutline className={css.icon} />
          {matchInfo}
        </div>
      )}

      <div className={css.addition}>
        {goals && (
          <div>
            <IoMdFootball className={css.icon} />
            {goals}
          </div>
        )}

        {place && (
          <div>
            <IoIosPin className={css.icon} />
            {place}
          </div>
        )}

        {reportURL && (
          <div>
            <IoIosLink className={css.icon} />
            <a href={reportURL} target="blank">
              {reportURL.split("/")[2]}
            </a>
          </div>
        )}
        {videoURL && (
          <div>
            <IoIosVideocam className={css.icon} />
            <a href={videoURL} target="blank">
              {videoURL.split("/")[2]}
            </a>
          </div>
        )}
      </div>
    </li>
  );
};

export default MatchCard;

