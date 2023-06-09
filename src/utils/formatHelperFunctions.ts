const convertKelvinToCelcius = (kelvin: number): number => {
  const celsius = kelvin - 273.15; // convert to Celsius
  const roundedCelsius = Math.round(celsius); // round up to nearest integer
  return roundedCelsius;
};

//change function to weighted probability
const getProbabilityOverHours = (valueArray: number[]): number => {
  const probabilityOfNotHappening = valueArray.reduce(
    (accumulator, currentValue) => {
      return accumulator * (1 - currentValue / 100);
    },
    1
  );

  const porbability = (1 - probabilityOfNotHappening) / valueArray.length;

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

const isDay = (sunrise: string, sunset: string): boolean | undefined => {
  const currentHour = getCurrentHour();
  const dayStartHour = convertTimeTo24HourFormat(sunrise);
  const dayEndHour = convertTimeTo24HourFormat(sunset);

  if (dayStartHour && dayEndHour) {
    console.log("not undefined");
    if (currentHour >= dayStartHour && currentHour < dayEndHour) {
      return true; // it's day time
    } else {
      return false; // it's night time
    }
  }
  console.log("undefined");
  return undefined;
};

function convertTimeTo24HourFormat(timeString: string): number | undefined {
  const match = timeString.match(/^(\d+)(:([0-9]{2}))?\s*(AM|PM)$/i);
  if (!match) {
    return undefined;
  }
  const hours = Number(match[1]);
  const minutes = match[3] ? Number(match[3]) : 0;
  const ampm = match[4].toUpperCase();
  if (hours === 12) {
    return ampm === "AM" ? 0 : 12;
  } else {
    return ampm === "AM" ? hours : hours + 12;
  }
}

function checkIfHourIsDay(
  hour: string,
  sunrise: string,
  sunset: string
): boolean | undefined {
  let currentHour = convertTimeTo24HourFormat(hour);
  const dayStartHour = convertTimeTo24HourFormat(sunrise);
  const dayEndHour = convertTimeTo24HourFormat(sunset);

  //check against 0 because 12AM is 0 in 24Hr
  if ((currentHour === 0 || currentHour) && dayStartHour && dayEndHour) {
    if (currentHour >= dayStartHour && currentHour < dayEndHour) {
      return true; // it's day time
    } else {
      return false; // it's night time
    }
  }
  return undefined;
}

const getUVLevel = (uv: number): string => {
  if (uv >= 11) {
    return "High";
  } else if (uv >= 7) {
    return "Moderate";
  } else {
    return "Low";
  }
};

const capitalizeWords = (input: string): string => {
  return input
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const compareTemps = (
  yesterdayMax: number,
  todayMax: number,
  yesterdayMin: number,
  todayMin: number
): string => {
  if (
    Math.abs(yesterdayMax - todayMax) <= 2 &&
    Math.abs(yesterdayMin - todayMin) <= 2
  ) {
    return "Today's Temp is almost the same as yesterday";
  } else if (todayMax - yesterdayMax >= 3 && todayMax - yesterdayMax <= 5) {
    return "Today's Temp a bit warmer than yeseterday";
  } else if (todayMax - yesterdayMax >= 5) {
    console.log(`this is todays max temp: ${todayMax}`);
    console.log(yesterdayMax);
    return "Today's Temp quite warmer than yesterday";
  } else if (yesterdayMin - todayMin >= 3 && yesterdayMin - todayMin <= 5) {
    return "Today's Temp a bit cooler than yesterday";
  } else if (yesterdayMin - todayMin > 5) {
    return "Today's Temp quite cooler than yesterday";
  } else {
    return "Expect vastly different weather from yesterday";
  }
};

const convertKelvinToFahrenheit = (kelvin: number): number => {
  const fahrenheit = (kelvin - 273.15) * 1.8 + 32;
  return Math.round(fahrenheit);
};

export {
  convertKelvinToFahrenheit,
  convertKelvinToCelcius,
  getProbabilityOverHours,
  getCurrentHour,
  getWeatherCodeOverHours,
  getDayFromDate,
  convertHourFormat,
  isDay,
  getUVLevel,
  capitalizeWords,
  checkIfHourIsDay,
  compareTemps,
};
