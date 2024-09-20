import axios from "axios";

const baseUrls = {
  'results': 'https://6618ee8a9a41b1b3dfbe5a4d.mockapi.io',
  'video': 'https://6618ee8a9a41b1b3dfbe5a4d.mockapi.io',
  'default': 'https://66ea622955ad32cda47890bf.mockapi.io'
};

export const getData = async ( path ) => {
  
  const baseUrl = Object.keys(baseUrls).find(key => path.includes(key)) || baseUrls['default'];
  const { data } = await axios.get(`${baseUrls[baseUrl] || baseUrls['default']}/${path}`);
  return data;
};
