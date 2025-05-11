import css from "./MatchSchedule.module.scss"
import React from 'react';

// Вспомогательный компонент для выделения текста
const HighlightedText = ({ text, highlight }) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'g'));
    
    return (
      <>
        {parts.map((part, i) =>
          part === highlight ? (
            <span key={i} className={css.highlightedTeam}>{part}</span>
          ) : (
            <React.Fragment key={i}>{part}</React.Fragment>
          )
        )}
      </>
    );
  };

const MatchSchedule = () => {
  const matches = [
    {
      "title": "Другий етап",
      "subTitle": "1 тур",
      "date": "03.05-08.05.2025",
      "games": [
        "ДЮФК Юніон - Буревій",
        "ФК Парус-ДЮСШ-7-2013 - ДЮСШ ФА Кривбас-2",
        "СКМД - Вихідний"
      ]
    },
    {
      "title": "2 тур",
      "date": "10.05-16.05.2025",
      "games": [
        "ФК Парус-ДЮСШ-7-2013 - Буревій",
        "СКМД - ДЮСШ ФА Кривбас-2",
        "ДЮФК Юніон - Вихідний"
      ]
    },
    {
      "title": "3 тур",
      "date": "17.05-23.05.2025",
      "games": [
        "ФК Парус-ДЮСШ-7-2013 - СКМД",
        "ДЮСШ ФА Кривбас-2 - ДЮФК Юніон",
        "Буревій - Вихідний"
      ]
    },
    {
      "title": "4 тур",
      "date": "24.05-30.05.2025",
      "games": [
        "ДЮФК Юніон - СКМД",
        "Буревій - ДЮСШ ФА Кривбас-2",
        "ФК Парус-ДЮСШ-7-2013 - Вихідний"
      ]
    },
    {
      "title": "5 тур",
      "date": "31.05.2025-01.06.2025",
      "games": [
        "ФК Парус-ДЮСШ-7-2013 - ДЮФК Юніон",
        "СКМД - Буревій",
        "ДЮСШ ФА Кривбас-2 - Вихідний"
      ]
    }
  ]
  ;

   // Функция для разбивки массива на группы
   const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const groupedMatches = chunkArray(matches, 3);

  return (
    <div className={css.matchSchedule}>
      <h2 className={css.title}>Розклад матчів</h2>
      {groupedMatches.map((matchGroup, groupIndex) => (
        <div key={groupIndex} className={css.matchRow}>
          {matchGroup.map((match, index) => (
            <div key={index} className={css.matchCard}>
              <h3 className={css.matchTitle}>
                {match.title} 
                {match.subTitle && <span className={css.subTitle}> ({match.subTitle})</span>}
                <span className={css.matchDate}>{match.date}</span>
              </h3>
              {match.games && match.games.length > 0 && (
                <ul className={css.matchList}>
                  {match.games.map((game, gameIndex) => (
                    <li key={gameIndex} className={css.matchItem}>
                      <HighlightedText text={game} highlight='ДЮФК "Юніон"' />
                    </li>
                  ))}
                </ul>
              )}
              {match.goldenCup && (
                <>
                  <h4 className={css.goldenCupTitle}>Золотий кубок</h4>
                  <ul className={css.matchList}>
                    {match.goldenCup.map((game, gameIndex) => (
                      <li key={gameIndex} className={css.matchItem}>
                        <HighlightedText text={game} highlight='ДЮФК "Юніон"' />
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatchSchedule;
