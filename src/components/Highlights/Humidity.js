import React from "react";
import Fade from "../Fade";
import Card from "../Card";
import Slider from "../Slider";

function Humidity({currentRelativeHumidity, relativehumidity_2m, relativeHumidityStatus}) {
  return(
    <Fade transitionKey={currentRelativeHumidity}>
      <Card className="humidity-card" title="Humidity">
        <div className="card-body">
          <div className="humidity-content">
            <h3 className="humidity-percents">
              {currentRelativeHumidity}
              <span>{relativehumidity_2m}</span>
            </h3>
            <p className="humidity-status">{relativeHumidityStatus}</p>
          </div>
          <div className="humidity-slider">
            <Slider orient="vertical" min="0" max="100" value={currentRelativeHumidity} readOnly={true}/>
          </div>
        </div>
      </Card>
    </Fade>
  );
}

export default Humidity;
