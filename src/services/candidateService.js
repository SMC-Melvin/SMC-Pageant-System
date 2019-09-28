import httpService from './httpService';
import { getCurrentUser } from './../utilities/auth.util';
const resource = process.env.REACT_APP_RESOURCE;
const baseUrl = `${resource}api`;

const getCandidates = (userId, id = 0) => {
  const url = `${baseUrl}/candidate?userId=${userId}&id=${id}`;
  return httpService.get(url);
};

const getCandidateAverageByCategory = categoryId => {
  const { Id: userId } = getCurrentUser();
  const url = `${baseUrl}/candidate-score-by-category?userId=${userId}&categoryId=${categoryId}`;
  return httpService.get(url);
};

const getCandidateByCategory = categoryId => {
  const { Id: userId } = getCurrentUser();
  const url = `${baseUrl}/candidate-by-category?userId=${userId}&categoryId=${categoryId}`;
  return httpService.get(url);
};

const setTopCandidate = candidate => {
  const url = `${baseUrl}/top-candidate-set`;
  return httpService.post(url, candidate);
};

const checkTopCandidateAvailability = () => {
  const url = `${baseUrl}/check-top-candidate`;
  return httpService.get(url);
};

export default {
  getCandidates,
  getCandidateAverageByCategory,
  getCandidateByCategory,
  setTopCandidate,
  checkTopCandidateAvailability
};
