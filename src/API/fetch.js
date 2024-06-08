import axios from "axios";

export const getData = async ( path ) => {
  const { data } = await axios.get(`https://znsegbvgiy.api.quickmocker.com/${path}`);
  return data;
};
