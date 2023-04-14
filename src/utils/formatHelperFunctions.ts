const convertKelvinToCelcius = (kelvin: number): number => {
  const celsius = kelvin - 273.15; // convert to Celsius
  const roundedCelsius = Math.round(celsius); // round up to nearest integer
  return roundedCelsius;
};

const getProbabilityOverHours = (valueArray: number[]): number => {
  const probabilityOfNotHappening = valueArray.reduce(
    (accumulator, currentValue) => {
      return accumulator * (1 - currentValue / 100);
    },
    1
  );

  const porbability = 1 - probabilityOfNotHappening;

  if (porbability < 0) return 0;
  return Math.round(porbability * 100);
};

const getCurrentHour = () => {
  let date = new Date();
  return date.getHours();
};

const getWeatherCodeOverHours = (valueArray: number[]): number => {
  const recordObj: Record<number, number> = {};
  let maxFreq = 0;
  let mostFrequentNum = 0;

  for (const num of valueArray) {
    recordObj[num] = (recordObj[num] || 0) + 1;
    if (recordObj[num] > maxFreq) {
      maxFreq = recordObj[num];
      mostFrequentNum = num;
    }
  }

  return mostFrequentNum;
};

const convertHourFormat = (hour: number): string => {
  if (hour === 0) {
    return "12AM";
  } else if (hour < 12) {
    return `${hour}AM`;
  } else if (hour === 12) {
    return "12PM";
  } else {
    return `${hour - 12}PM`;
  }
};

const getDayFromDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const dayOfWeek = date.getDay(); // returns number from 1

  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  //console.log(week[dayOfWeek]);
  return week[dayOfWeek];
};

const isDay = (): boolean => {
  function checkDay(
    currentTime: Date,
    //start and end determined according to
    // meteo weather api codes
    dayStartHour: number = 10,
    dayEndHour: number = 21
  ) {
    const currentHour = currentTime.getHours();
    if (currentHour >= dayStartHour && currentHour < dayEndHour) {
      return true; // it's day time
    } else {
      return false; // it's night time
    }
  }
  const now = new Date();

  return checkDay(now);
};

export {
  convertKelvinToCelcius,
  getProbabilityOverHours,
  getCurrentHour,
  getWeatherCodeOverHours,
  getDayFromDate,
  convertHourFormat,
  isDay,
};
