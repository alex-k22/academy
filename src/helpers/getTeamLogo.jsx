const teamLogos = {
  "АФК": "https://afk.pp.ua/img/logo/afk-logo.png",
  "АФК Юніон": "https://afk.pp.ua/img/logo/afk-logo.png",
  "АФК-2": "https://afk.pp.ua/img/logo/afk-logo.png",
  "АФК Юніон-2": "https://afk.pp.ua/img/logo/afk-logo.png",
  "ДЮФК Юніон": "https://afk.pp.ua/img/logo/afk-logo.png",
  "ДЮФК Юніон-2": "https://afk.pp.ua/img/logo/afk-logo.png",
  "ДЮСШ Слобожанське": "https://dyussh.dp.ua/android-chrome-512x512.png",
  "Надія-Рапід": "https://afk.pp.ua/img/logo/nadiya-logo.png",
  "МДЮСШ": "https://afk.pp.ua/img/logo/mdussh-logo.png",
  "МДЮСШ-2": "https://afk.pp.ua/img/logo/mdussh-logo.png",
  "ДЮСШ ФА Кривбас" : "https://afk.pp.ua/img/logo/kryvbas-logo.png",
  "ДЮСШ ФА Кривбас-2" : "https://afk.pp.ua/img/logo/kryvbas-logo.png",
  "Інтер-2013" : "https://afk.pp.ua/img/logo/inter-dnepr.png",
  "Інтер" : "https://afk.pp.ua/img/logo/inter-dnepr.png",
  "СКМД" : "https://scmd.dp.ua/wp-content/uploads/2022/07/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D0%9D.png",
  "Буревій" : "https://afk.pp.ua/img/logo/burevij-logo.png",
  "ДЮСШ-2" : "https://afk.pp.ua/img/logo/dyush2.png",
  "ДЮСШ-7-Океан-2" : "https://afk.pp.ua/img/logo/okean-logo.png",
  "Олімпія-Дніпро" : "https://duf-futsal.com.ua/frontend/webcontent/images/websites/5/teams/2020_06_14_21_06_34_1592159434.jpg",
  "ДАФ Дніпро": "https://afk.pp.ua/img/logo/dnipro-logo.png",
  "ФК Парус-ДЮСШ-7-2013": "https://afk.pp.ua/img/logo/parus-logo.png",
  "ФК Парус-ДЮСШ-7": "https://afk.pp.ua/img/logo/parus-logo.png"
};

const getTeamLogo = (teamName) => {
  return teamLogos[teamName] || "https://afk.pp.ua/img/logo/default-logo.png";
};

export default getTeamLogo;
