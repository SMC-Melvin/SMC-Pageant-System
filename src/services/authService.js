import httpService from './httpService';
const resource = process.env.REACT_APP_RESOURCE;
const baseUrl = `${resource}api`;

const login = (username, password) => {
  const url = `${baseUrl}/login`;
  return httpService.post(url, { username, password });
};

export default {
  login
};
