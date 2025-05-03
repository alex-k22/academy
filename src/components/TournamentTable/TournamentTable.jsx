import { useState, useEffect } from "react";
import css from "../TournamentTable/TournamentTable.module.scss";
import getTeamLogo from "../../helpers/getTeamLogo";

// Функция для вычисления статистики команд и результатов личных встреч
const calculateTable = (matches) => {
  const teams = {};

  // Сначала создаем объекты для всех команд
  matches.forEach((match) => {
    const { team1, team2 } = match;
    if (!teams[team1]) {
      teams[team1] = {
        name: team1,
        games: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,
        headToHead: {}, // Добавляем объект для хранения результатов личных встреч
      };
    }
    if (!teams[team2]) {
      teams[team2] = {
        name: team2,
        games: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,
        headToHead: {},
      };
    }
  });

  // Затем заполняем статистику, включая личные встречи
  matches.forEach((match) => {
    const { team1, team2, team1Score, team2Score } = match;
    const score1 = parseInt(team1Score, 10);
    const score2 = parseInt(team2Score, 10);

    teams[team1].games += 1;
    teams[team2].games += 1;
    teams[team1].goalsFor += score1;
    teams[team1].goalsAgainst += score2;
    teams[team2].goalsFor += score2;
    teams[team2].goalsAgainst += score1;

    // Записываем результаты личных встреч
    if (!teams[team1].headToHead[team2]) {
      teams[team1].headToHead[team2] = { goalsFor: 0, goalsAgainst: 0, points: 0 };
      teams[team2].headToHead[team1] = { goalsFor: 0, goalsAgainst: 0, points: 0 };
    }

    teams[team1].headToHead[team2].goalsFor += score1;
    teams[team1].headToHead[team2].goalsAgainst += score2;
    teams[team2].headToHead[team1].goalsFor += score2;
    teams[team2].headToHead[team1].goalsAgainst += score1;

    if (score1 > score2) {
      teams[team1].wins += 1;
      teams[team1].points += 3;
      teams[team2].losses += 1;
      teams[team1].headToHead[team2].points += 3;
    } else if (score1 < score2) {
      teams[team2].wins += 1;
      teams[team2].points += 3;
      teams[team1].losses += 1;
      teams[team2].headToHead[team1].points += 3;
    } else {
      teams[team1].draws += 1;
      teams[team1].points += 1;
      teams[team2].draws += 1;
      teams[team2].points += 1;
      teams[team1].headToHead[team2].points += 1;
      teams[team2].headToHead[team1].points += 1;
    }
  });

  // Преобразуем объект в массив и добавляем разницу голов
  const tableArray = Object.values(teams).map((team) => ({
    ...team,
    goalDifference: team.goalsFor - team.goalsAgainst,
  }));

  // Сортируем таблицу
  return tableArray.sort((a, b) => {
    // Сначала по очкам
    if (b.points !== a.points) {
      return b.points - a.points;
    }

    // Если очки равны, проверяем личные встречи
    if (a.headToHead[b.name] && b.headToHead[a.name]) {
      const aPoints = a.headToHead[b.name].points;
      const bPoints = b.headToHead[a.name].points;
      
      if (aPoints !== bPoints) {
        return bPoints - aPoints;
      }
      
      // Если в личных встречах ничья, сравниваем разницу голов в личных встречах
      const aGoalDiff = a.headToHead[b.name].goalsFor - a.headToHead[b.name].goalsAgainst;
      const bGoalDiff = b.headToHead[a.name].goalsFor - b.headToHead[a.name].goalsAgainst;
      
      if (aGoalDiff !== bGoalDiff) {
        return bGoalDiff - aGoalDiff;
      }
    }

    // Если личных встреч не было или они равны, сравниваем общую разницу голов
    const goalDifferenceA = a.goalDifference;
    const goalDifferenceB = b.goalDifference;
    if (goalDifferenceA !== goalDifferenceB) {
      return goalDifferenceB - goalDifferenceA;
    }

    // Если разница голов равна, сравниваем количество забитых голов
    return b.goalsFor - a.goalsFor;
  });
};

const TournamentTable = ({ matches }) => {
  console.log(matches);
  const [table, setTable] = useState([]);

  useEffect(() => {
    const newTable = calculateTable(matches);
    setTable(newTable);
  }, [matches]);

  return (
    <div className={css.wrapper}>
      <h3 className={css.subHeader}>Турнірна таблиця</h3>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Команда</th>
            <th>І</th>
            <th>В</th>
            <th>Н</th>
            <th>П</th>
            <th>ГЗ</th>
            <th>ГП</th>
            <th>РГ</th>
            <th>О</th>
          </tr>
        </thead>
        <tbody>
          {table.map((team, index) => (
            <tr
              key={team.name}
              className={team.name === "ДЮФК Юніон" ? css.bold : ""}
            >
              <td>{index + 1}</td>
              <td className={css.team}>
                {" "}
                <img
                  src={getTeamLogo(team.name)}
                  alt={team.name}
                  className={css.clubLogo}
                ></img>
                {team.name}
              </td>
              <td align="center">{team.games}</td>
              <td align="center">{team.wins}</td>
              <td align="center">{team.draws}</td>
              <td align="center">{team.losses}</td>
              <td align="center">{team.goalsFor}</td>
              <td align="center">{team.goalsAgainst}</td>
              <td align="center">{team.goalDifference}</td>
              <td align="center">{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TournamentTable;