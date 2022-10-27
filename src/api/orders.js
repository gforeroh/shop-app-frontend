import axios from "axios";
import { URL_API } from "../config/index"
// import jwt_decode from "jwt-decode";
const config = {};


export const getOrdersAll = async () => { //userId, token
  // if(!token) {
  //   token = localStorage.getItem("token")
  // }
  // if(!userId && token) {
  //   const decoded = jwt_decode(token);
  //   userId = decoded.user_id;
  // }
  // config.headers = { Authorization: `Bearer ${token}` };
  const res = axios.get(
    `${URL_API}/order`,
    config
  );
  return res;
};

export const getOrderOnly = async (id) => { //userId, token
  // if(!token) {
  //   token = localStorage.getItem("token")
  // }
  // if(!userId && token) {
  //   const decoded = jwt_decode(token);
  //   userId = decoded.user_id;
  // }
  // config.headers = { Authorization: `Bearer ${token}` };
  const res = axios.get(
    `${URL_API}/order/${id}`,
    config
  );
  return res;
};