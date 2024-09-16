import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://good-sensible-condor.ngrok-free.app/api",
  // baseURL: " https://integration-buses-d-closer.trycloudflare.com/api",
  baseURL: "https://accounting-lived-bet-distribution.trycloudflare.com/api",

  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
