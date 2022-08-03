import axios, { AxiosError, AxiosResponse } from 'axios';
import { WeatherEntity } from '../models/entites';
import { ICity, IWeather } from '../models/models';
import { mapWeatherFromEntity } from '../shared/functions/map';

const sleep = () => new Promise((resolve) => setTimeout(resolve, 500));

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const responseBody = (response: AxiosResponse) => response.data;
const responseError = (error: AxiosError) => error.response?.data;

axios.interceptors.request.use(
  (config) => {
    if (apiKey) {
      config.url += `&appid=${apiKey}`;
    }

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  async (response) => {
    if (process.env.NODE_ENV === 'development') await sleep();

    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

const requests = {
  get: (url: string) => axios.get(url).then(responseBody).catch(responseError),
};

const agent = {
  getByCity: async (city: ICity): Promise<IWeather> => {
    const url = `data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&exclude=hourly`;
    const response: WeatherEntity = await requests.get(url);
    return mapWeatherFromEntity(response);
  },
};

export default agent;
