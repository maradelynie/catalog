import axios from 'axios';

export const sendWithAxios = async (
  rota: string,
  method: string,
  // eslint-disable-next-line
  payload?: any
) => {
  const APIURL = process.env.REACT_APP_APIURL;

  const result = await axios({
    url: APIURL + rota,
    method: method,
    data: payload
  });
  return result;
};
