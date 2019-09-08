import httpService from './httpService';
import { resource } from '../config.json';
const baseUrl = `${resource}api`;

const getCategory = () => {
  const url = `${baseUrl}/category`;
  return httpService.get(url);
};

export default {
  getCategory
};
