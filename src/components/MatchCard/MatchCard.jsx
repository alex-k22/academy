import css from "./MatchCard.module.scss";
import {
  IoIosPin,
  IoMdFootball,
  IoMdInformationCircleOutline,
  IoIosVideocam,
  IoIosLink,
} from "react-icons/io";

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
  } = results;

  const corDate = formatDate(new Date(date));
  return (
    <li className={css.card}>
      <div className={css.cardTitle}>
        <div>{corDate}</div>
        <div>{competition}</div>
      </div>
      <div className={css.matchResult}>
        <div className={css.team1}>{team1}</div>
        <div>
          <div className={css.score}>
            <div className={css.scoreDigit}>{team1Score}</div>
            <div className={css.scoreDigit}>{team2Score}</div>
          </div>
        </div>
        <div className={css.team2}>{team2}</div>
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

function formatDate(date) {
  var dd = date.getDate();
  if (dd < 10) dd = "0" + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = "0" + mm;

  var yy = date.getFullYear() % 100;
  if (yy < 10) yy = "0" + yy;

  return dd + "." + mm + "." + yy;
}
