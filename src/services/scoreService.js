import httpService from './httpService';
const resource = process.env.REACT_APP_RESOURCE;
const baseUrl = `${resource}api`;

const setScore = score => {
  const url = `${baseUrl}/score`;
  return httpService.post(url, score);
};

export default {
  setScore
};
