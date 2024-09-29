import { Notify } from "notiflix";
import { useEffect, useState } from "react";
import { getData } from "../../API/fetch";
import Loader from "../Loader/Loader";
import FormatDate from "../../helpers/FormatDate";
import getTeamLogo from "../../helpers/getTeamLogo";
import css from "../PreviousMatch/PreviousMatch.module.scss";

const PreviousMatch = () => {
  const [status, setStatus] = useState("idle");
  const [pastMatch, setPastMatch] = useState();
  const [nextMatch, setNextMatch] = useState();

  useEffect(() => {
    const now = new Date();
    const fetchData = async () => {
      try {
        setStatus("pending");
        const results = await getData("results");

        if (results.length === 0) {
          Notify.failure("Нажаль, нічого не знайдено");
          setStatus("rejected");
        }
        if (results.length > 0) {
          setStatus("resolved");
        }

        const pastMatch =
          results
            .filter((match) => new Date(match.date) < now)
            .sort((a, b) => new Date(b.date) - new Date(a.date))[0] || null;
        console.log(pastMatch);
        console.log(pastMatch.date);

        const nextMatch =
          results
            .filter((match) => new Date(match.date) > now)
            .sort((a, b) => new Date(a.date) - new Date(b.date))[0] || null;
        console.log(nextMatch);

        setNextMatch(nextMatch);
        setPastMatch(pastMatch);
      } catch (error) {
        Notify.failure(error.message);
        setStatus("rejected");
      }
    };
    fetchData();
  }, []);

  return (
    <div className={css.wrapper}> 
      {pastMatch && (
        <div className={css.card}>
          <div className={css.cardTitle}>
            <h2 className={css.h2}>Попередній матч</h2>
            <p>{FormatDate(new Date(pastMatch.date))}</p>
            <p>{pastMatch.competition}</p>
          </div>
          <div className={css.matchResult}>
            <div className={css.team1}>
              <img
                src={getTeamLogo(pastMatch.team1)}
                alt={pastMatch.team1}
                className={css.clubLogo}
              ></img>
              <p className={css.place}>{pastMatch.team1}</p>
            </div>
            <div className={css.score}>
              <p className={css.scoreDigit}>{pastMatch.team1Score}</p>
              <p className={css.scoreDigit}>{pastMatch.team2Score}</p>
            </div>
            <div className={css.team2}>
              <img
                src={getTeamLogo(pastMatch.team2)}
                alt={pastMatch.team2}
                className={css.clubLogo}
              ></img>
              <p className={css.place}>{pastMatch.team2}</p>
            </div>
          </div>
          <p className={css.place}>{pastMatch.place}</p>
        </div>
      )}

       {nextMatch && (
        <div className={css.card}>
          <div className={css.cardTitle}>
            <h2 className={css.h2}>Наступний матч</h2>
            <p>{FormatDate(new Date(nextMatch.date))}</p>
            <p>{nextMatch.competition}</p>
          </div>
          <div className={css.matchResult}>
            <div className={css.team1}>
              <img
                src={getTeamLogo(nextMatch.team1)}
                alt={nextMatch.team1}
                className={css.clubLogo}
              ></img>
              <p className={css.place}>{nextMatch.team1}</p>
            </div>
            <div className={css.score}>
              <p className={css.nextScoreDigit}></p>
              <p className={css.nextScoreDigit}></p>
            </div>
            <div className={css.team2}>
              <img
                src={getTeamLogo(nextMatch.team2)}
                alt={nextMatch.team2}
                className={css.clubLogo}
              ></img>
              <p className={css.place}>{nextMatch.team2}</p>
            </div>
          </div>
          <p className={css.place}>{nextMatch.place}</p>
        </div>
      )}
      {status === "pending" && <Loader />}
    </div>
  );
};

export default PreviousMatch;
