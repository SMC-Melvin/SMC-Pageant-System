import httpService from './httpService';
const resource = process.env.REACT_APP_RESOURCE;
const baseUrl = `${resource}api`;

const getCategory = () => {
  const url = `${baseUrl}/category`;
  return httpService.get(url);
};

export default {
  getCategory
};
