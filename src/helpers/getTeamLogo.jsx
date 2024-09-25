const teamLogos = {
  "АФК": "https://afk.pp.ua/img/logo/afk-logo-60x60.png",
  "АФК Юніон": "https://afk.pp.ua/img/logo/afk-logo-60x60.png",
  "АФК-2": "https://afk.pp.ua/img/logo/afk-logo-60x60.png",
  "АФК Юніон-2": "https://afk.pp.ua/img/logo/afk-logo-60x60.png",
  "ДЮСШ Слобожанське": "https://dyussh.dp.ua/android-chrome-512x512.png",
  "Надія-Рапід": "https://dufldo.com.ua/wp-content/uploads/2018/10/photo_2018-10-25_12-42-58.jpg",
  "МДЮСШ": "https://dufldo.com.ua/wp-content/uploads/2021/08/MDYUSSH-696x693.jpg",
  "МДЮСШ-2": "https://dufldo.com.ua/wp-content/uploads/2021/08/MDYUSSH-696x693.jpg",
  "ДЮСШ ФА Кривбас" : "https://dufldo.com.ua/wp-content/uploads/2021/08/Kriviy-Rig-2.jpg",
  "ДЮСШ ФА Кривбас-2" : "https://dufldo.com.ua/wp-content/uploads/2021/08/Kriviy-Rig-2.jpg",
  "Інтер-2013" : "https://afk.pp.ua/img/logo/inter-dnepr.png",
  "СКДМ" : "https://scmd.dp.ua/wp-content/uploads/2022/07/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D0%9D.png",
  "Буревій" : "https://dufldo.com.ua/wp-content/uploads/2023/09/Bureviy-696x696.jpg",
  "ДЮСШ-2" : "https://afk.pp.ua/img/logo/dyush2.png",
  "ДЮСШ-7-Океан-2" : "https://dufldo.com.ua/wp-content/uploads/2021/08/okean.jpg",
};

const getTeamLogo = (teamName) => {
  return teamLogos[teamName] || "https://afk.pp.ua/img/logo/default-logo.png";
};

export default getTeamLogo;
