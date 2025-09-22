import axios from "axios";

const primaryBaseUrl = 'https://www.afkdata.pp.ua'; // основной json-server
const fallbackBaseUrl = 'https://cdn.jsdelivr.net/gh/alex-k22/rpm/afk.json'; // GitHub fallback

export const getData = async (path) => {
  try {
    // ⚡ Пробуем основной сервер, но не дольше 3 секунд
    const { data } = await axios.get(`${primaryBaseUrl}/${path}`, {
      timeout: 3000,
    });
    return data;
  } catch (error) {
    console.warn(`⚠️ Основной сервер недоступен, используем fallback: ${error.message}`);

    // 📥 fallback: загружаем весь JSON и достаем нужный раздел
    const { data } = await axios.get(fallbackBaseUrl, {
      timeout: 5000, // запасной таймаут, чтобы GitHub тоже не висел
    });
    return data[path];
  }
};