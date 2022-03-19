import axios from "axios";
import * as nprogress from "nprogress";
import { environment } from "src/environments/environment";

export function addPreRequestInterceptor() {
  axios.interceptors.request.use((config) => {
      nprogress.start();
      config.baseURL = environment.request.baseUrl;
      return config;
    });
    
    axios.interceptors.response.use((response) => {
      nprogress.done();
      return response;
    });
}