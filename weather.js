#!/usr/bin/env node
import { getArgs } from './helpers/args.js';

const initCLI = () => {
  const args = getArgs(process.argv);
  console.log('start==> ', args);

  if (args.h) {
    //вывод help
  }

  if (args.s) {
    //Сохранить город
  }

  if (args.t) {
    //Сохранить токен
  }

  //вывести погоду
};

initCLI();