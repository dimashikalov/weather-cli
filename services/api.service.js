import https from 'https';
import { getKeyValue, TOKEN_DISTIONARY } from './storage.service.js';
import axios from 'axios';

const getIcon = async (icon) => {
  switch (icon.slice(0, -1)) {
    case '01':
      return '☀️';
    case '02':
      return '🌤️';
    case '03':
      return '☁️';
    case '04':
      return '☁️';
    case '09':
      return '🌧️';
    case '10':
      return '🌦️';
    case '11':
      return '🌩️';
    case '13':
      return '❄️';
    case '50':
      return '🌫️';
  }
};

const getWeather = async (city) => {
  const token = await getKeyValue(TOKEN_DISTIONARY.token);
  // const city = await getKeyValue(TOKEN_DISTIONARY.city);
  if (!token) {
    throw new Error('Не задан клч API, задайте его через команду -t [API_KEY]');
  }
  // if (!city) {
  //   throw new Error('Не задан город, задайте его через команду -s [CITY]');
  // }

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

export { getWeather, getIcon };
