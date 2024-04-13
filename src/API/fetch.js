import axios from "axios";

export const getData = async ( path ) => {
  const { data } = await axios.get(`https://6618ee8a9a41b1b3dfbe5a4d.mockapi.io/${path}`);
  return data;
};
