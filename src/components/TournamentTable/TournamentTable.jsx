import { useState, useEffect } from 'react';
import css from "../TournamentTable/TournamentTable.module.scss";

// Функция для вычисления статистики команд
const calculateTable = (matches) => {
  const teams = {};

  matches.forEach((match) => {
    const { team1, team2, team1Score, team2Score } = match;
    const score1 = parseInt(team1Score, 10);
    const score2 = parseInt(team2Score, 10);

    if (!teams[team1]) {
      teams[team1] = { name: team1, games: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, points: 0 };
    }
    if (!teams[team2]) {
      teams[team2] = { name: team2, games: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, points: 0 };
    }

    teams[team1].games += 1;
    teams[team2].games += 1;
    teams[team1].goalsFor += score1;
    teams[team1].goalsAgainst += score2;
    teams[team2].goalsFor += score2;
    teams[team2].goalsAgainst += score1;

    if (score1 > score2) {
      teams[team1].wins += 1;
      teams[team1].points += 3;
      teams[team2].losses += 1;
    } else if (score1 < score2) {
      teams[team2].wins += 1;
      teams[team2].points += 3;
      teams[team1].losses += 1;
    } else {
      teams[team1].draws += 1;
      teams[team1].points += 1;
      teams[team2].draws += 1;
      teams[team2].points += 1;
    }
  });

  // Преобразуем объект в массив и сортируем по очкам, а затем по разнице голов
  return Object.values(teams).map(team => ({
    ...team,
    goalDifference: team.goalsFor - team.goalsAgainst, // Вычисляем разницу голов
  })).sort((a, b) => {
    const pointDifference = b.points - a.points;
    if (pointDifference === 0) {
      const goalDifferenceA = a.goalDifference;
      const goalDifferenceB = b.goalDifference;
      return goalDifferenceB - goalDifferenceA;
    }
    return pointDifference;
  });
};

const TournamentTable = ( {matches} ) => {
console.log(matches);
  const [table, setTable] = useState([]);

  useEffect(() => {
    const newTable = calculateTable(matches);
    setTable(newTable);
  }, [matches]);

  return (
    <div className={css.wrapper}>
      <h2>Турнірна таблиця</h2>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Команда</th>
            <th>И</th>
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
            <tr key={team.name} className={team.name === "ДЮФК Юніон" ? css.bold : ""}>
              <td>{index + 1}</td>
              <td>{team.name}</td>
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
