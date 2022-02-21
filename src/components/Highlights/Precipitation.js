import React from "react";
import Fade from "../Fade";
import Card from "../Card";

function Precipitation({currentPrecipitationRate, precipitation, weatherIconPath, currentWeatherCondition}) {
  return(
    <Fade transitionKey={currentPrecipitationRate}>
      <Card className="precipitation-card" title="Precipitation">
        <div className="card-body">
          <h3 className="precipitation-rate">
            {currentPrecipitationRate}
            <span> {precipitation}</span>
          </h3>
          <div className="weather-condition">
            <img src={weatherIconPath} alt="weather-state"/>
            <p>{currentWeatherCondition}</p>
          </div>
        </div>
      </Card>
    </Fade>
  );
}

export default Precipitation;
