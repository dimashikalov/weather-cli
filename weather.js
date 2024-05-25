#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { getWeather, getIcon } from './services/api.service.js';
import {
  printHelp,
  printError,
  printSuccess,
  printWeather,
} from './services/log.service.js';
import {
  getKeyValue,
  saveKeyValue,
  TOKEN_DISTIONARY,
} from './services/storage.service.js';

const saveToken = async (token) => {
  if (!token.length) {
    printError('Не передан токен');
    return;
  }
  try {
    await saveKeyValue(TOKEN_DISTIONARY.token, token);
    printSuccess('Токен сохранен');
  } catch (error) {
    printError(e.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printError('Не передан город');
    return;
  }
  try {
    await saveKeyValue(TOKEN_DISTIONARY.city, city);
    printSuccess('Город сохранен');
  } catch (e) {
    printError(e.message);
  }
};

const getForcast = async () => {
  try {
    const city = process.env.CITY ?? (await getKeyValue(TOKEN_DISTIONARY.city));
    const weather = await getWeather(city);
    const icon = await getIcon(weather.weather[0].icon);
    printWeather(weather, icon);
  } catch (e) {
    if (e?.responce?.status == 404) {
      printError('Неверно указан город');
    } else if (e?.responce?.status == 401) {
      printError('Неверно указан токен');
    } else {
      printError(e.message);
    }
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
  }

  if (args.s) {
    saveCity(args.s);
  }

  if (args.t) {
    saveToken(args.t);
  }
  getForcast();
  //вывести погоду
};

initCLI();
