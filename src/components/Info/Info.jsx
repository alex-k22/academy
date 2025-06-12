
import { useState, useEffect } from 'react';
import css from "./Info.module.scss";

const Info = () => {
  const [isCupVisible, setIsCupVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCupVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

//   // URL изображения кубка
//   const cupImage = "https://w7.pngwing.com/pngs/210/851/png-transparent-cup-champion-award-trophy-second-runner-up-runner-up-almost-second-best-not-quite-thumbnail.png";
//   // Fallback SVG в base64
//   const fallbackSvg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='%23C0C0C0' d='M50 15L60 30H40L50 15M30 35V60H70V35H30M35 65L40 85H60L65 65H35M50 30V60M40 35L35 65M60 35L65 65'/%3E%3C/svg%3E";

  return (
    <div className={css.container}>
      <p className={css.text}>
        ДЮФК Юніон - срібний призер чемпіонату Дніпропетровської області з футболу серед юнаків 2012 р. н. Перша ліга. Сезон 2024-2025 рр
      </p>
      
      <div className={`${css.cupContainer} ${isCupVisible ? css.visible : ''}`}>
        {/* <img 
          src={cupImage}
          alt="Срібний кубок"
          className={css.cupImage}
          onError={(e) => {
            e.target.src = fallbackSvg;
            e.target.onerror = null; // Предотвращаем зацикливание
          }}
        /> */}
      </div>
    </div>
  );
};

export default Info;