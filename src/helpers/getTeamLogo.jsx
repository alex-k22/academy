const teamLogos = {
  "АФК": "https://afk.pp.ua/img/logo/afk-logo.png",
  "АФК Юніон": "https://afk.pp.ua/img/logo/afk-logo.png",
  "ДЮФК Юніон": "https://afk.pp.ua/img/logo/afk-logo.png",
  "ДЮСШ Слобожанське": "https://afk.pp.ua/img/logo/dussh-slobojanske.png",
  "Надія-Рапід": "https://afk.pp.ua/img/logo/nadiya-logo.png",
  "МДЮСШ": "https://afk.pp.ua/img/logo/mdussh-logo.png",
  "ДЮСШ ФА Кривбас" : "https://afk.pp.ua/img/logo/kryvbas-logo.png",
  "Інтер" : "https://afk.pp.ua/img/logo/inter-dnepr.png",
  "СКМД" : "https://afk.pp.ua/img/logo/scmd-logo.png",
  "Буревій" : "https://afk.pp.ua/img/logo/burevij-logo.png",
  "ДЮСШ-2" : "https://afk.pp.ua/img/logo/dyush2.png",
  "ДЮСШ-7-Океан" : "https://afk.pp.ua/img/logo/okean-logo.png",
  "Олімпія-Дніпро" : "https://afk.pp.ua/img/logo/olimpia-dnipro-logo.png",
  "ДАФ Дніпро": "https://afk.pp.ua/img/logo/dnipro-logo.png",
  "ФК Парус-ДЮСШ-7": "https://afk.pp.ua/img/logo/parus-logo.png",
  "ДЮСШ Синельникове": "https://afk.pp.ua/img/logo/dyussh-sinelnikove-logo.png",
  "Металург": "https://afk.pp.ua/img/logo/metalurg-logo.png",
  "Царичанка": "https://afk.pp.ua/img/logo/tsarichanka-logo.png",
  "ДЮСШ Царичанка": "https://afk.pp.ua/img/logo/tsarichanka-logo.png",
  "НФК Дніпро": "https://afk.pp.ua/img/logo/NFC-dnipro-logo.png",
  "ФА Ротаня і Зозулі": "https://afk.pp.ua/img/logo/rotanya-logo.png",
  "УФК-Кривбас Дніпро": "https://afk.pp.ua/img/logo/ufk-kryvbas.png",
  "ХФК Пенуел": "https://afk.pp.ua/img/logo/penuel-logo.png",
  "ДЮСШ-7": "https://afk.pp.ua/img/logo/dussh-7-logo.png",
  "ФК Скорук": "https://afk.pp.ua/img/logo/fc-skoruk-logo.png",
  "Надія-Nova": "https://afk.pp.ua/img/logo/nadiya-nova-logo.png",
  "Інгулець": "https://afk.pp.ua/img/logo/inhulets.png",
  "Прикарпаття": "https://afk.pp.ua/img/logo/prykarpattya.png",
  "Winner":"https://afk.pp.ua/img/logo/winner.png",
"Дніпровець":"https://afk.pp.ua/img/logo/dniprovets.jpg",
};

const getTeamLogo = (teamName) => {
  // Сначала проверяем точное совпадение
  if (teamLogos[teamName]) {
    return teamLogos[teamName];
  }
  
  // Если точного совпадения нет, ищем базовое название
  // Убираем индексы в конце вида "-число" или "-2013" и т.д.
  const baseName = teamName.replace(/-\d+$/, '');
  
  // Проверяем, есть ли базовое название в нашем словаре
  if (teamLogos[baseName]) {
    return teamLogos[baseName];
  }
  
  // Если ничего не найдено, возвращаем логотип по умолчанию
  return "https://afk.pp.ua/img/logo/default-logo.png";
};

export default getTeamLogo;
