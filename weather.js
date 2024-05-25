#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printHelp, printError, printSuccess } from './services/log.service.js';
import { saveKeyValue, TOKEN_DISTIONARY } from './services/storage.service.js';

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

const initCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
  }

  if (args.s) {
    //Сохранить город
  }

  if (args.t) {
    saveToken(args.t);
  }
  getWeather('moscow');
  //вывести погоду
};

initCLI();
