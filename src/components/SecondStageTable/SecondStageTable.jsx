import { useState, useEffect } from "react";
import React from "react";
import getTeamLogo from "../../helpers/getTeamLogo";
import css from "../TournamentTable/TournamentTable.module.scss";
import { calculateTable } from "../../helpers/tournamentHelpers";


// Для каждой команды собираем все матчи из первого этапа + свои из второго
const buildFullMatchesForGroup = (stageOneMatches, stageTwoMatches, groupTeams) => {
  const fullMatchesByTeam = [];

  groupTeams.forEach((teamName) => {
    // Все матчи первого этапа, где участвовала команда
    const stageOne = stageOneMatches.filter(
      (match) => match.team1 === teamName || match.team2 === teamName
    );

    // Матчи второго этапа, где обе команды в группе и участвует эта команда
    const stageTwo = stageTwoMatches.filter(
      (match) =>
        groupTeams.includes(match.team1) &&
        groupTeams.includes(match.team2) &&
        (match.team1 === teamName || match.team2 === teamName)
    );

    fullMatchesByTeam.push({
      name: teamName,
      matches: [...stageOne, ...stageTwo],
    });
  });

  return fullMatchesByTeam;
};

const SecondStageTable = ({ allMatches, top5, bottom5 }) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const stageOneMatches = allMatches.filter(m => m.stage === 1);
    const stageTwoMatches = allMatches.filter(m => m.stage === 2);

    // Строим полные матчи для каждой группы
    const top5Data = buildFullMatchesForGroup(stageOneMatches, stageTwoMatches, top5);
    const bottom5Data = buildFullMatchesForGroup(stageOneMatches, stageTwoMatches, bottom5);



    const tableTop5 = top5Data.map(team => calculateTable(team.matches).find(t => t.name === team.name));
    const tableBottom5 = bottom5Data.map(team => calculateTable(team.matches).find(t => t.name === team.name));

    // Объединяем в одну таблицу
    const mergedTable = [...tableTop5, ...tableBottom5];
    setTableData(mergedTable);
  }, [allMatches, top5, bottom5]);

  return (
    <div className={css.wrapper}>
      <h3 className={css.subHeader}>Другий етап</h3>
      <table className="fullWidthTable">
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
          {tableData.map((team, index) => {
            const position = index + 1;
            const isDividerRow = position === 5; // Толстая линия после 5-й строки

            return (
              <React.Fragment key={team.name}>
                <tr className={team.name === "ДЮФК Юніон" ? css.bold : ""}>
                  <td>{position}</td>
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
                {/* Разделительная строкa */}
                {isDividerRow && (
                  <tr>
                    <td colSpan="10" className={css.divider}></td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SecondStageTable;