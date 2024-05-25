import https from 'https';
import { getKeyValue, TOKEN_DISTIONARY } from './storage.service.js';
import axios from 'axios';

const getWeather = async (city) => {
  const token = await getKeyValue(TOKEN_DISTIONARY.token);
  if (!token) {
    throw new Error('Не задан клч API, задайте его через команду -t [API_KEY]');
  }

  const { data } = await axios.get(
    'https://api.openweathermap.org/data/2.5/weather',
    {
      params: {
        q: city,
        appid: token,
        lang: 'ru',
        units: 'metric',
      },
    }
  );

  return data;
};

export { getWeather };
