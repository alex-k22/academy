import { Notify } from "notiflix";
import { useEffect, useState } from "react";
import { getData } from "../../API/fetch";
import Loader from "../Loader/Loader";
import FormatDate from "../../helpers/FormatDate";
import getTeamLogo from "../../helpers/getTeamLogo";
// import Container from "components/Shared/Container";
// import getTeamLogo from "../../../helpers/getTeamLogo";
import css from "./ChampResults.module.scss";
import TournamentTable from "../TournamentTable/TournamentTable";

const ChampResults = () => {
  const [champResults, setChampResults] = useState();
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus("pending");
        const results = await getData("champResults");

        if (results.length === 0) {
          Notify.failure("Нажаль, нічого не знайдено");
          setStatus("rejected");
        }
        if (results.length > 0) {
          setStatus("resolved");
        }
        const sortedResults = results.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setChampResults(sortedResults);
        console.log(results);
      } catch (error) {
        Notify.failure(error.message);
        setStatus("rejected");
      }
    };
    fetchData();
  }, []);

  /**/

  return (
    <section className={css.wrapper}>
      <div>
        {champResults && (
          <div>
            <h2>Результати матчів чемпіонату області</h2>
            {/* <ul>
              {champResults.map((result) => {
                return (
                  <li className={css.match} key={result.id}>
                    <div className={css.team1}>{result.team1} </div>
                    <div className={css.score}>
                      <p className={css.digit}>{result.team1Score}</p>
                      <p className={css.digit}>{result.team2Score}</p>
                    </div>
                    <div className={css.team2}> {result.team2}</div>
                  </li>
                );
              })}
            </ul> */}
            <table>
              <tbody>
                {champResults.map((match) => (
                  <tr key={match.id}>
                    {/* <td>{FormatDate(new Date(match.date))}</td> */}
                    <td className={css.team1} align="right" valign="center">
                    <p className={match.team1 === "ДЮФК Юніон" ? css.bold : ""}>
  {match.team1}
</p>
                      <img
                        src={getTeamLogo(match.team1)}
                        alt={match.team1}
                        className={css.clubLogo}
                      ></img>
                    </td>
                    <td align="center">
                      <p>{match.team1Score}:{match.team2Score}</p>
                      <p className={css.date}>{FormatDate(new Date(match.date))}</p>
                    </td>
                    <td className={css.team2}  align="left" valign="center">
                      <img
                        src={getTeamLogo(match.team2)}
                        alt={match.team2}
                        className={css.clubLogo}
                      ></img>
                      <p className={match.team2 === "ДЮФК Юніон" ? css.bold : ""}>
  {match.team2}
</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <TournamentTable matches={champResults} />
          </div>
        )}
        {status === "pending" && <Loader />}
      </div>
    </section>
  );
};

export default ChampResults;
