import React from "react";
import moment from "moment";
import './styles.scss';
import {
  getCompassWindDirection, getCurrentCloudCover, getCurrentPrecipitationRate,
  getCurrentRelativeHumidity, getCurrentWeatherCode, getCurrentWindDirection, getCurrentWindSpeed,
  getHumidityStatus, getWeatherCondition, getWeatherIconPath
} from "../../utils";
import UVIndex from "./UVIndex";
import Wind from "./Wind";
import Sun from "./Sun";
import Humidity from "./Humidity";
import Precipitation from "./Precipitation";
import Cloud from "./Cloud";

function Highlights({hourly, units, daily, uv, timezone}) {
  const { windspeed_10m, relativehumidity_2m, precipitation, cloudcover } = units;
  const { sunrise, sunset } = daily;

  const currentDate = moment().tz(timezone);
  const currentWindSpeed = getCurrentWindSpeed(hourly);
  const currentWindDirection = getCurrentWindDirection(hourly);
  const compassWindDirection = getCompassWindDirection(currentWindDirection);

  const currentRelativeHumidity = getCurrentRelativeHumidity(hourly);
  const relativeHumidityStatus = getHumidityStatus(currentRelativeHumidity);

  const currentPrecipitationRate = getCurrentPrecipitationRate(hourly);
  const weatherCode = getCurrentWeatherCode(hourly);
  const currentWeatherCondition = getWeatherCondition(weatherCode);
  const weatherIconPath = getWeatherIconPath(weatherCode, currentDate, sunrise[0], sunset[0]);

  const [altitude, setAltitude] = React.useState(3);
  const currentCloudCover = getCurrentCloudCover(hourly, altitude);

  return (
    <section className="highlights">
      <h2 className="title">Today`s Highlights</h2>
      <div className="highlights-cards">
        <UVIndex uv={uv}/>
        <Wind
          currentWindSpeed={currentWindSpeed}
          windspeed_10m={windspeed_10m}
          currentWindDirection={currentWindDirection}
          compassWindDirection={compassWindDirection}/>
        <Sun sunrise={sunrise[0]} sunset={sunset[0]}/>
        <Humidity
          currentRelativeHumidity={currentRelativeHumidity}
          relativehumidity_2m={relativehumidity_2m}
          relativeHumidityStatus={relativeHumidityStatus}/>
        <Precipitation
          currentPrecipitationRate={currentPrecipitationRate}
          precipitation={precipitation}
          weatherIconPath={weatherIconPath}
          currentWeatherCondition={currentWeatherCondition}/>
        <Cloud
          currentCloudCover={currentCloudCover}
          cloudcover={cloudcover}
          altitude={altitude}
          setAltitude={setAltitude}/>
      </div>
    </section>
  );
}

export default Highlights;