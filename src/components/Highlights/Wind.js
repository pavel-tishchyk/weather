import React from "react";
import Fade from "../Fade";
import Card from "../Card";

function Wind({currentWindSpeed, windspeed_10m, currentWindDirection, compassWindDirection}) {
  return(
    <Fade transitionKey={currentWindSpeed}>
      <Card className="wind-card" title="Wind Status">
        <div className="card-body">
          <h3 className="wind-speed">
            {currentWindSpeed}
            <span> {windspeed_10m}</span>
          </h3>
          <div className="wind-direction">
            <img
              src={process.env.PUBLIC_URL + "icons/wind_direction_icon.svg"}
              alt="wind-direction"
              style={{transform: `rotate(${currentWindDirection + 180}deg)`}} />
            <p>{compassWindDirection}</p>
          </div>
        </div>
      </Card>
    </Fade>
  );
}

export default Wind;
