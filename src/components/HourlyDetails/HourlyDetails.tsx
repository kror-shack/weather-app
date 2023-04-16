import {
  CityDetails,
  TodayWeatherMainDetails,
  DailyWeatherDetails,
  HourlyWeatherDetails,
} from "../../types/types";
import IconHourly from "../Icons/IconHourly/IconHourly";

import "./HourlyDetails.scss";

type Props = {
  hourlyDetails: DailyWeatherDetails;
};

const HourlyDetails = ({ hourlyDetails }: Props) => {
  return (
    <div className="Hourly-Details-container">
      <div className="Hourly-Details">
        {Object.keys(hourlyDetails.hourly).map((hour) => (
          <div key={hourlyDetails.hourly[hour].key}>
            <p>{hour}</p>
            <IconHourly
              weatherCode={hourlyDetails.hourly[hour].weatherCode}
              hour={hour}
            />

            <p>{` ${hourlyDetails.hourly[hour].temp}`}&deg;</p>
            <div className="percipitation">
              <svg
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 6.35858C0 7.06424 0.176414 7.72387 0.536913 8.32982C0.897411 8.93576 1.38063 9.42665 1.99425 9.78715C2.60786 10.1476 3.2675 10.3317 3.98082 10.3317C4.69415 10.3317 5.36146 10.1476 5.98274 9.78715C6.60403 9.42665 7.09492 8.93576 7.45542 8.32982C7.81592 7.7162 8 7.06424 8 6.35858C8 5.89837 7.86961 5.35379 7.60115 4.71716C7.33269 4.08054 7.01055 3.48993 6.63471 2.95302C6.29722 2.51582 5.89837 2.0326 5.43816 1.51103C4.97795 0.989454 4.17258 0.184084 3.98849 0L3.00671 0.989453C2.53116 1.44966 2.07095 1.97891 1.63375 2.58485C1.19655 3.1908 0.813039 3.84276 0.490891 4.54075C0.153403 5.23873 0 5.84468 0 6.35858Z" />
              </svg>
              <p>{hourlyDetails.hourly[hour].percipiation_probability}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyDetails;
