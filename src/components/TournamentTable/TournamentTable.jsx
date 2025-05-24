import { useState, useEffect } from "react";
import getTeamLogo from "../../helpers/getTeamLogo";
import css from "./TournamentTable.module.scss";
import { calculateTable } from "../../helpers/tournamentHelpers";

const TournamentTable = ({ matches }) => {
  const [table, setTable] = useState([]);

  useEffect(() => {
    const newTable = calculateTable(matches);
    setTable(newTable);
  }, [matches]);

  return (
    <div className={css.wrapper}>
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
                <img
                  src={getTeamLogo(team.name)}
                  alt={team.name}
                  className={css.clubLogo}
                />
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