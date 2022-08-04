import axios from "axios";

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth';

function createHeaders(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  return config;
}

function signup (body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);
  return promise;
}

function login (body) {
  const promise = axios.post(`${BASE_URL}/login`, body);
  return promise;
}

function createHabit (body) {
  const promise = axios.post(`${BASE_URL}/habits`, body);
  return promise;
}

function getHabits (token) {
  const config = createHeaders(token);
  const promise = axios.get(`${BASE_URL}/habits`, config);
  return promise;
}

function deleteHabit (habitId) {
  const promise = axios.delete(`${BASE_URL}/habits/${habitId}`);
  return promise;
}

function getTodayHabits () {
  const promise = axios.get(`${BASE_URL}/habits/today`);
  return promise;
}
function checkHabit (habitId) {
  const promise = axios.get(`${BASE_URL}/habits/${habitId}/check`);
  return promise;
}

function unCheckHabit (habitId) {
  const promise = axios.get(`${BASE_URL}/habits/${habitId}/uncheck`);
  return promise;
}

function historyTodayHabits (habitId) {
  const promise = axios.get(`${BASE_URL}/habits/history/daily`);
  return promise;
}

export { 
  signup, 
  login, 
  createHabit, 
  getHabits, 
  deleteHabit, 
  getTodayHabits, 
  checkHabit, 
  unCheckHabit, 
  historyTodayHabits 
};