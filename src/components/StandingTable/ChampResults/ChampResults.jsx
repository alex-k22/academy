import { Notify } from "notiflix";
import { useEffect, useState } from "react";
import { getData } from "../../../API/fetch";
import Loader from "../../Loader/Loader";
// import Container from "components/Shared/Container";
// import getTeamLogo from "../../../helpers/getTeamLogo";
import css from "../ChampResults/ChampResults.module.scss";

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

        setChampResults(results);
        console.log(results);
      } catch (error) {
        Notify.failure(error.message);
        setStatus("rejected");
      }
    };
    fetchData();
  }, []);

  return (
<section>
  
    <div>
      {champResults && (
        <div>
           <h2>Результати матчів чемпіонату області</h2>
          <ul>
            {champResults.map((result) => {
                return (
                    <li className={css.match}key={result.id}>
                        <div className={css.team1}>{result.team1} </div>
                        <div className={css.score}>
                            <p className={css.digit}>{result.team1Score}</p>
                            <p className={css.digit}>{result.team2Score}</p>
                        </div>
                        <div className={css.team2}> {result.team2}</div>
                    </li>
                )
                })}
          </ul>
        </div>
      )}
      {status === "pending" && <Loader />}
    </div>
 
</section>
  );
};

export default ChampResults;
