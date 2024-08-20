const temperatures = {
  "01.01.2015": 33.3, "02.01.2015": 20.2, "03.01.2015": 18.3, "04.01.2015": 22.2,
  "05.01.2015": 30.0, "06.01.2015": 40.2, "07.01.2015": 22.3, "08.01.2015": 23.2,
  "09.01.2015": 24.2, "10.01.2015": 25.2, "11.01.2015": 30.2, "12.01.2015": 30.2,
  "13.01.2015": 31.2, "14.01.2015": 10.2
};

function calculateAverageTemperature(temps) {
  const sum = temps.reduce((acc, val) => acc + val, 0);
  return sum / temps.length;
}

const firstWeekTemps = [
  temperatures["01.01.2015"], temperatures["02.01.2015"], temperatures["03.01.2015"],
  temperatures["04.01.2015"], temperatures["05.01.2015"], temperatures["06.01.2015"],
  temperatures["07.01.2015"]
];

const secondWeekTemps = [
  temperatures["08.01.2015"], temperatures["09.01.2015"], temperatures["10.01.2015"],
  temperatures["11.01.2015"], temperatures["12.01.2015"], temperatures["13.01.2015"],
  temperatures["14.01.2015"]
];

const firstWeekAvg = calculateAverageTemperature(firstWeekTemps);
const secondWeekAvg = calculateAverageTemperature(secondWeekTemps);

console.log(`Средната температура за първата седмица на януари е: ${firstWeekAvg.toFixed(2)}°C`);
console.log(`Средната температура за втората седмица на януари е: ${secondWeekAvg.toFixed(2)}°C`);

const daysOfWeek = ["понеделник", "вторник", "сряда", "четвъртък", "петък", "събота", "неделя"];
const dates = Object.keys(temperatures);

for (let i = 1; i < dates.length; i++) {
  const prevTemp = temperatures[dates[i - 1]];
  const currentTemp = temperatures[dates[i]];
  const tempDiff = (currentTemp - prevTemp).toFixed(1);
  const dayOfWeek = daysOfWeek[i % 7];
  console.log(`${dayOfWeek}, ${dates[i]}: ${currentTemp}°C, промяна: ${tempDiff}°C`);
}
