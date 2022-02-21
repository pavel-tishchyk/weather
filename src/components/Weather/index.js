import React from "react";
import {useEffect} from "react";
import {connect} from "react-redux";
import './styles.scss';
import Today from "../Today";
import Week from "../Week";
import Highlights from "../Highlights";
import {getWeatherData} from "../../actions/weather";

function Weather({locationData, weatherData, temperatureUnit, getWeatherData}) {
  const {latitude, longitude, timezone} = locationData;

  useEffect(() => {
    getWeatherData(latitude, longitude, timezone, temperatureUnit)
  }, [getWeatherData, latitude, longitude, timezone, temperatureUnit])

  return (
    <section className="weather">
      {weatherData
        ? <React.Fragment>
        <Today
          locationData={locationData}
          hourly={weatherData.hourly}
          units={weatherData.hourly_units.temperature_2m}
          sunrise={weatherData.daily.sunrise[0]}
          sunset={weatherData.daily.sunset[0]}/>
        <div className="container">
          <Week daily={weatherData.daily}/>
          <Highlights
            hourly={weatherData.hourly}
            units={weatherData.hourly_units}
            daily={weatherData.daily}
            uv={weatherData.uv}
            timezone={timezone}
          />
        </div>
      </React.Fragment>
        : <React.Fragment></React.Fragment>}
    </section>
  );
}

const mapStateToProps = (state) => ({
  weatherData: state.weather.weatherData,
  temperatureUnit: state.weather.temperatureUnit
})

const mapDispatchToProps = {
  getWeatherData
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
