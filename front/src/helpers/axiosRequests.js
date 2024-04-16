import axios from "axios";
import { apiUrl } from "../constants/config";
export const getRequestWithHeader = async (url) => {
  let token = "";
  if (localStorage.getItem("token")) {
    token = localStorage.getItem("token");
  }
  return await axios.get(apiUrl + url, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
export const postRequestWithHeader = async (url, body) => {
  let token = "";
  if (localStorage.getItem("token")) {
    token = localStorage.getItem("token");
  }
  return await axios.post(apiUrl + url, body, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
export const deleteRequestWithHeader = async (url) => {
  let token = "";
  if (localStorage.getItem("token")) {
    token = localStorage.getItem("token");
  }
  return await axios.delete(apiUrl + url, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
export const putRequestWithHeader = async (url, body) => {
  let token = "";
  if (localStorage.getItem("token")) {
    token = localStorage.getItem("token");
  }
  return await axios.put(apiUrl + url, body, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
