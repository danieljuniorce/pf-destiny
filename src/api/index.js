import axios from "axios";

const api = axios.create({ baseURL: "https://api-pf.herokuapp.com/" });

export default api;
