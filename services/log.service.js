import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
  console.log(chalk.bgRed(' ERROR '), error);
};

const printSuccess = (message) => {
  console.log(`${chalk.bgGreen(' SUCCESS ')}: ${message}`);
};

const printWeather = (message, icon) => {
  console.log(
    dedent` ${chalk.bgYellow(' Погода ')}
    Город: ${message.name}
   ${icon}  ${message.weather[0].description.toUpperCase()}
    Мин. температура: ${message.main.temp_min}
    Макс. температура: ${message.main.temp_max}
    Скорость ветра: ${message.wind.speed} м/с
  `
  );
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(' HELP ')}
	Без параметров - вывод погоды
	-s [CITY] для установки города
	-h для вывода помощи
	-t [API_KEY] для сохранения токена
   `
  );
};

export { printError, printSuccess, printHelp, printWeather };
