import httpService from './httpService';
import { resource } from '../config.json';
const baseUrl = `${resource}api`;

const login = (username, password) => {
  const url = `${baseUrl}/login`;
  return httpService.post(url, { username, password });
};

export default {
  login
};
