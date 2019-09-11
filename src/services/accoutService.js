import httpService from './httpService';
import { resource } from '../config.json';
import { userBuilderForAPI } from '../mappers/accout.mapper';

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
