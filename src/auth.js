const TOKEN_KEY = null;
const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
const getToken = () => localStorage.getItem(TOKEN_KEY);
const login = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};
const logout = () => {
  return localStorage.removeItem(TOKEN_KEY);
};

const setId = (value) => {
  localStorage.setItem("id", value);
};

const getId = () => {
  return localStorage.getItem("id");
};

const setName = (value) => {
  localStorage.setItem("name", value);
};

const getName = () => {
  return localStorage.getItem("name");
};

const setDistinctive = (value) => {
  localStorage.setItem("distinctive", value);
};

const getDistinctive = () => {
  return localStorage.getItem("distinctive");
};

const setEquip = (value) => {
  localStorage.setItem("equip", value);
};

const getEquip = () => {
  return localStorage.getItem("equip");
};

const setRg = (value) => {
  localStorage.setItem("rg", value);
};

const getRg = () => {
  return localStorage.getItem("rg");
};

const setCharge = (value) => {
  localStorage.setItem("charge", value);
};

const getCharge = () => {
  return localStorage.getItem("charge");
};

export {
  isAuthenticated,
  logout,
  login,
  getToken,
  getCharge,
  setCharge,
  getRg,
  setRg,
  getEquip,
  setEquip,
  getDistinctive,
  setDistinctive,
  getName,
  setName,
  getId,
  setId,
};
