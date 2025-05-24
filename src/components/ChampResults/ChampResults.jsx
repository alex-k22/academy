import { Notify } from "notiflix";
import { useEffect, useState } from "react";
import { getData } from "../../API/fetch";
import Loader from "../Loader/Loader";
import FormatDate from "../../helpers/FormatDate";
import getTeamLogo from "../../helpers/getTeamLogo";
import css from "./ChampResults.module.scss";
import TournamentTable from "../TournamentTable/TournamentTable";
import SecondStageTable from "../SecondStageTable/SecondStageTable"; // Новый компонент
import dufldoLogo from "../../assets/img/logo/dufldo-logo.jpeg";
import { calculateTable } from "../../helpers/tournamentHelpers";

// Функция добавления stage к каждому матчу
const addStageToMatches = (matches, cutoffDate) => {
  const cutoff = new Date(cutoffDate);
  return matches.map((match) => {
    const matchDate = new Date(match.date);
    const stage = matchDate < cutoff ? 1 : 2;
    return { ...match, stage };
  });
};

const tournamentData = {
  region: {
    header: "Чемпіонат області. 1 ліга",
    endpoint: "champResults"
  },
  dnipro: {
    header: "Чемпіонат м. Дніпро. 1 ліга",
    endpoint: "dniproResults"
  }
};

const ChampResults = ({ tournament, stages = 1, cutoffDate = "2025-05-12" }) => {
  const [tournamentResults, setTournamentResults] = useState();
  const [status, setStatus] = useState("idle");

  const currentTournament = tournamentData[tournament];
  const sectionHeader = currentTournament.header;
  const endpoint = currentTournament.endpoint;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus("pending");
        const results = await getData(endpoint);

        if (results.length === 0) {
          Notify.failure("Нажаль, нічого не знайдено");
          setStatus("rejected");
        } else {
          setStatus("resolved");
        }

        const publishedMatches = results.filter((match) => match.isPublished);
        const sortedResults = publishedMatches.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );

        const matchesWithStage = addStageToMatches(sortedResults, cutoffDate);
        setTournamentResults(matchesWithStage);
      } catch (error) {
        Notify.failure(error.message);
        setStatus("rejected");
      }
    };

    fetchData();
  }, [endpoint, cutoffDate]);

  if (!tournamentResults) {
    return status === "pending" ? <Loader /> : null;
  }

  const stageOneMatches = tournamentResults.filter((m) => m.stage === 1);

  const tableAfterStageOne = calculateTable(stageOneMatches);
  const sortedTeams = [...tableAfterStageOne].sort((a, b) => b.points - a.points);

  // Группы по результатам первого этапа
  const top5Teams = sortedTeams.slice(0, 5).map(team => team.name);
  const bottom5Teams = sortedTeams.slice(5).map(team => team.name);

  const isStageOneFinished = stageOneMatches.length >= 45;

  return (
    <section className={css.wrapper}>
      <div>
        <div className={css.leagueHeader}>
          <img src={dufldoLogo} alt="DUFLDO Logo" className={css.leagueLogo} />
          <h2>{sectionHeader}</h2>
        </div>

        {/* Одностадийный режим */}
        {stages !== 2 && <TournamentTable matches={tournamentResults} />}

        {/* Двухэтапный режим */}
        {stages === 2 && isStageOneFinished && (
          <>
            {/* Единая таблица второго этапа с разделением на группы */}
            <SecondStageTable
              allMatches={tournamentResults}
              top5={top5Teams}
              bottom5={bottom5Teams}
            />

            {/* Таблица после первого этапа */}
            <h3 className={css.subHeader}>Перший етап</h3>
            <TournamentTable matches={stageOneMatches} />
          </>
        )}

        {/* Результаты матчей */}
        <div className={css.results}>
          <h3 className={css.subHeader}>Результати матчів</h3>
          <ul>
            {tournamentResults.map((match) => (
              <li key={match.id} className={css.match}>
                <div className={css.matchWrapper}>
                  <div className={css.team1}>
                    <p className={match.team1 === "ДЮФК Юніон" ? css.bold : ""}>{match.team1}</p>
                    <img
                      src={getTeamLogo(match.team1)}
                      alt={match.team1}
                      className={css.clubLogo}
                    />
                  </div>
                </div>
                <div className={css.score}>
                  <p>
                    {match.team1Score}:{match.team2Score}
                  </p>
                  <p className={css.date}>{FormatDate(new Date(match.date))}</p>
                </div>
                <div className={css.matchWrapper}>
                  <div className={css.team2}>
                    <img
                      src={getTeamLogo(match.team2)}
                      alt={match.team2}
                      className={css.clubLogo}
                    />
                    <p className={match.team2 === "ДЮФК Юніон" ? css.bold : ""}>{match.team2}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ChampResults;