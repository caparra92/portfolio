import axios from "axios";

let baseURL: string;
const vue_env = process.env.VUE_APP_VUE_ENV;

if(vue_env !== 'development'){
    baseURL = process.env.VUE_APP_PROD_BASE_URL as string;
} else {
    baseURL = process.env.VUE_APP_DEVBASE_URL as string;
}

export const apiReq = axios.create({
    baseURL
  });
  
  apiReq.interceptors.request.use((config) => {
    return config;
  });

export const uri = baseURL;