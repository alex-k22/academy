const teamLogos = {
  "АФК": "https://afk.pp.ua/img/logo/afk-logo.png",
  "АФК Юніон": "https://afk.pp.ua/img/logo/afk-logo.png",
  "АФК-2": "https://afk.pp.ua/img/logo/afk-logo.png",
  "АФК Юніон-2": "https://afk.pp.ua/img/logo/afk-logo.png",
  "ДЮФК Юніон": "https://afk.pp.ua/img/logo/afk-logo.png",
  "ДЮФК Юніон-2": "https://afk.pp.ua/img/logo/afk-logo.png",
  "ДЮСШ Слобожанське": "https://afk.pp.ua/img/logo/dussh-slobojanske.png",
  "Надія-Рапід": "https://afk.pp.ua/img/logo/nadiya-logo.png",
  "МДЮСШ": "https://afk.pp.ua/img/logo/mdussh-logo.png",
  "МДЮСШ-2": "https://afk.pp.ua/img/logo/mdussh-logo.png",
  "ДЮСШ ФА Кривбас" : "https://afk.pp.ua/img/logo/kryvbas-logo.png",
  "ДЮСШ ФА Кривбас-2" : "https://afk.pp.ua/img/logo/kryvbas-logo.png",
  "Інтер-2013" : "https://afk.pp.ua/img/logo/inter-dnepr.png",
  "Інтер" : "https://afk.pp.ua/img/logo/inter-dnepr.png",
  "СКМД" : "https://afk.pp.ua/img/logo/scmd-logo.png",
  "Буревій" : "https://afk.pp.ua/img/logo/burevij-logo.png",
  "ДЮСШ-2" : "https://afk.pp.ua/img/logo/dyush2.png",
  "ДЮСШ-7-Океан-2" : "https://afk.pp.ua/img/logo/okean-logo.png",
  "Олімпія-Дніпро" : "https://afk.pp.ua/img/logo/olimpia-dnipro-logo.png",
  "ДАФ Дніпро": "https://afk.pp.ua/img/logo/dnipro-logo.png",
  "ФК Парус-ДЮСШ-7-2013": "https://afk.pp.ua/img/logo/parus-logo.png",
  "ФК Парус-ДЮСШ-7": "https://afk.pp.ua/img/logo/parus-logo.png",
  "ДЮСШ Синельникове": "https://afk.pp.ua/img/logo/dyussh-sinelnikove-logo.png",
  "Металург": "https://afk.pp.ua/img/logo/metalurg-logo.png",
  "Царичанка": "https://afk.pp.ua/img/logo/tsarichanka-logo.png",
  "ДЮСШ Царичанка": "https://afk.pp.ua/img/logo/tsarichanka-logo.png",
  "НФК Дніпро": "https://afk.pp.ua/img/logo/NFC-dnipro-logo.png"
};

const getTeamLogo = (teamName) => {
  return teamLogos[teamName] || "https://afk.pp.ua/img/logo/default-logo.png";
};

export default getTeamLogo;
