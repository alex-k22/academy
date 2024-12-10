import { Notify } from "notiflix";
import { useEffect, useState } from "react";
import { getData } from "../../API/fetch";
import Loader from "../Loader/Loader";
import FormatDate from "../../helpers/FormatDate";
import getTeamLogo from "../../helpers/getTeamLogo";
import css from "./ChampResults.module.scss";
import TournamentTable from "../TournamentTable/TournamentTable";
import dufldoLogo from "../../assets/img/logo/dufldo-logo.jpeg";

const tournamentData = {
  "region": {
    "header": "Чемпіонат області. 1 ліга",
    "endpoint": "champResults"
  },
"dnipro": {
  "header": "Чемпіонат м. Дніпро. 1 ліга",
  "endpoint": "dniproResults"
}
}

const ChampResults = ({tournament}) => {
  const [tournamentResults, setTournamentResults] = useState();
  const [status, setStatus] = useState("idle");
  const currentTournament = tournamentData[tournament];
  const sectionHeader = currentTournament.header;
  const endpoint = currentTournament.endpoint;
  
  console.log("endpoint: ", endpoint);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus("pending");
        const results = await getData(endpoint);

        if (results.length === 0) {
          Notify.failure("Нажаль, нічого не знайдено");
          setStatus("rejected");
        }
        if (results.length > 0) {
          setStatus("resolved");
        }
        const sortedResults = results
          .filter((match) => match.isPublished == true)
          .sort((a, b) => new Date(b.date) - new Date(a.date));
        setTournamentResults(sortedResults);
        console.log(results);
      } catch (error) {
        Notify.failure(error.message);
        setStatus("rejected");
      }
    };
    fetchData();
  }, [endpoint]);

  /**/
 
  return (
    <section className={css.wrapper}>
      <div>
        {tournamentResults && (
          <div>
            <div className={css.leagueHeader}>
              <img src={dufldoLogo} alt="DUFLDO Logo" className={css.leagueLogo} />
              <h2>{sectionHeader}</h2>
            </div>
            <div className={css.tableResults}>
              <TournamentTable matches={tournamentResults} />
              {/* <input type="checkbox" className={css.readMoreChecker} id="read-more-checker" /> */}
              <div className={css.results}>
                <h3 className={css.subHeader}>Результати матчів</h3>
                <ul>
                  {tournamentResults.map((match) => (
                    <li key={match.id} className={css.match}>
                      <div className={css.matchWrapper}>
                        <div className={css.team1}>
                          <p
                            className={
                              match.team1 === "ДЮФК Юніон" ? css.bold : ""
                            }
                          >
                            {match.team1}
                          </p>
                          <img
                            src={getTeamLogo(match.team1)}
                            alt={match.team1}
                            className={css.clubLogo}
                          ></img>
                        </div>
                      </div>
                      <div className={css.score}>
                        <p>
                          {match.team1Score}:{match.team2Score}
                        </p>
                        <p className={css.date}>
                          {FormatDate(new Date(match.date))}
                        </p>
                      </div>
                      <div className={css.matchWrapper}>
                        <div className={css.team2}>
                          <img
                            src={getTeamLogo(match.team2)}
                            alt={match.team2}
                            className={css.clubLogo}
                          ></img>
                          <p
                            className={
                              match.team2 === "ДЮФК Юніон" ? css.bold : ""
                            }
                          >
                            {match.team2}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                {/* <div className={css.bottom}></div> */}
                {/* <label htmlFor="read-more-checker" className={css.readMoreButton}></label> */}
              </div>

              {/* <label htmlFor="read-more-checker" className={css.readMoreButton}></label> */}
              
            </div>
          </div>
        )}
        {status === "pending" && <Loader />}
      </div>
    </section>
  );
};

export default ChampResults;
