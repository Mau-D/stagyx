//interceptor.js /services/store
//Empêche de gérer le header aux niveau des services
//Maud Harvey et Guillaume Labrecques
//1er juin 2021
import axios from "axios";

export default function setup() {
  axios.interceptors.request.use(
    function(config) {
      const token = localStorage.getItem("jwt");
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    },
    function(err) {
      return Promise.reject(err);
    }
  );
}