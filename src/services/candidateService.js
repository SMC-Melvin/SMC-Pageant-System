import httpService from './httpService';
import { resource } from '../config.json';
const baseUrl = `${resource}api`;

const getCandidates = (userId, id = 0) => {
  const url = `${baseUrl}/candidate?userId=${userId}&id=${id}`;
  return httpService.get(url);
};

export default {
  getCandidates
};
