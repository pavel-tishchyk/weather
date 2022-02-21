import React, {useEffect} from "react";
import './styles.scss';
import moment from "moment-timezone";
import requests from "../../requests";
import {getCurrentTemperature, getCurrentWeatherCode, getWeatherCondition, getWeatherIconPath} from "../../utils";
import Fade from "../Fade";

function Today({locationData, hourly, units, sunrise, sunset}) {
  const {name, country_code, timezone} = locationData;
  const [mapImage, setMapImage] = React.useState(null);

  const currentTemperature = getCurrentTemperature(hourly);
  const currentWeatherCode = getCurrentWeatherCode(hourly);

  const currentDate = moment().tz(timezone);
  const currentDay = currentDate.format('dddd');
  const currentTime = currentDate.format('H:mm');

  const weatherCondition = getWeatherCondition(currentWeatherCode);
  const weatherIconPath = getWeatherIconPath(currentWeatherCode, currentDate, sunrise, sunset);

  useEffect(  () => {
    async function fetchMapImage() {
      const blob = await requests.getMapImage(locationData.latitude, locationData.longitude);
      setMapImage(URL.createObjectURL(blob));
    }
    fetchMapImage();
  }, [locationData])

  return (
    <aside className="today">
      <Fade transitionKey={weatherIconPath}>
        <div className="weather-image animate__animated">
          <img src={weatherIconPath} alt={weatherCondition}/>
        </div>
      </Fade>
      <div className="weather-information">
        <h1 className="temperature">{currentTemperature}{units}</h1>
        <h2 className="date">{currentDay}, <time dateTime={currentDate.format()} className="time">{currentTime}</time></h2>
         <p className="weather-location">{!!name ? `${name}, ` : ''} {country_code}</p>
        <div className="map">
          <img className="map-image" src={mapImage} alt="map"/>
          <p className="map-text"></p>
        </div>
      </div>
    </aside>
  );
}

export default Today;