export const calculateTable = (matches) => {
    const teams = {};
  
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
          headToHead: {},
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
  
      // Общая статистика
      teams[team1].games += 1;
      teams[team2].games += 1;
  
      const score1 = parseInt(match.team1Score, 10);
      const score2 = parseInt(match.team2Score, 10);
  
      teams[team1].goalsFor += score1;
      teams[team1].goalsAgainst += score2;
      teams[team2].goalsFor += score2;
      teams[team2].goalsAgainst += score1;
  
      // Личные встречи
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
  
    const tableArray = Object.values(teams).map((team) => ({
      ...team,
      goalDifference: team.goalsFor - team.goalsAgainst,
    }));
  
    return tableArray.sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
  
      if (a.headToHead[b.name] && b.headToHead[a.name]) {
        const aPoints = a.headToHead[b.name]?.points ?? 0;
        const bPoints = b.headToHead[a.name]?.points ?? 0;
        if (aPoints !== bPoints) return bPoints - aPoints;
  
        const aGoalDiff =
          (a.headToHead[b.name]?.goalsFor ?? 0) -
          (a.headToHead[b.name]?.goalsAgainst ?? 0);
        const bGoalDiff =
          (b.headToHead[a.name]?.goalsFor ?? 0) -
          (b.headToHead[a.name]?.goalsAgainst ?? 0);
        if (aGoalDiff !== bGoalDiff) return bGoalDiff - aGoalDiff;
      }
  
      const goalDifferenceA = a.goalDifference;
      const goalDifferenceB = b.goalDifference;
      if (goalDifferenceA !== goalDifferenceB)
        return b.goalDifference - a.goalDifference;
  
      return b.goalsFor - a.goalsFor;
    });
  };