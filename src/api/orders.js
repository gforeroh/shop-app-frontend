import axios from "axios";
import { URL_API } from "../config/index"
const config = {};

export const getOrdersAll = async () => { //userId, token
  const res = axios.get(
    `${URL_API}/order`,
    config
  );
  return res;
};

export const getOrderOnly = async (id) => { //userId, token
  const res = axios.get(
    `${URL_API}/order/${id}`,
    config
  );
  return res;
};

export const getOrdersDate = async (date) => { //userId, token
  const res = axios.get(
    `${URL_API}/order/date_order/${date}`,
    config
  );
  return res;
};