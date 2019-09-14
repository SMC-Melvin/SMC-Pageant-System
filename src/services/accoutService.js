import httpService from './httpService';
import { userBuilderForAPI } from '../mappers/accout.mapper';
const resource = process.env.REACT_APP_RESOURCE;
const baseUrl = `${resource}api`;

const getAccount = (username, password) => {
  const url = `${baseUrl}/account`;
  return httpService.get(url);
};

const setAccount = user => {
  const url = `${baseUrl}/account`;
  return httpService.post(url, userBuilderForAPI(user));
};

export default {
  getAccount,
  setAccount
};
