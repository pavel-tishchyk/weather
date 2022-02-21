import React from "react";
import Fade from "../Fade";
import Card from "../Card";
import Slider from "../Slider";

function Cloud({currentCloudCover, cloudcover, altitude, setAltitude}) {
  return(
    <Fade transitionKey={currentCloudCover}>
      <Card className="cloud-card" title="Cloud Cover">
        <div className="card-body">
          <div className="cloud-content">
            <h3 className="cloud-percents">
              {currentCloudCover}
              <span>{cloudcover}</span>
            </h3>
          </div>
          <div className="cloud-slider">
            <Slider min="3" max="12" steps={3} value={altitude} readOnly={true}/>
            <ul className="range-labels">
              <li className={altitude === 3 ? "selected" : ""} onClick={() => setAltitude(3)}>3 km</li>
              <li className={altitude === 6 ? "selected" : ""} onClick={() => setAltitude(6)}>6 km</li>
              <li className={altitude === 9 ? "selected" : ""} onClick={() => setAltitude(9)}>9 km</li>
              <li className={altitude === 12 ? "selected" : ""} onClick={() => setAltitude(12)}>Total</li>
            </ul>
          </div>
        </div>
      </Card>
    </Fade>
  );
}

export default Cloud;
