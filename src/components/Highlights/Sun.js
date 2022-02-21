import React from "react";
import moment from "moment";
import Fade from "../Fade";
import Card from "../Card";

function Sun({sunrise, sunset}) {
  const sunriseTime = moment(sunrise).format("LT");
  const sunsetTime = moment(sunset).format("LT");

  return(
    <Fade transitionKey={`${sunriseTime}-${sunsetTime}`}>
      <Card className="sun-card" title="Sunrise & Sunset">
        <div className="card-body">
          <div className="sunrise">
            <div className="sunrise-icon">
              <img
                src={process.env.PUBLIC_URL + "icons/c1.svg"}
                alt="sunrise-icon"/>
            </div>
            <time dateTime={sunrise}>{sunriseTime}</time>
          </div>
          <div className="sunset">
            <div className="sunset-icon">
              <img
                src={process.env.PUBLIC_URL + "icons/c1.svg"}
                alt="sunset-icon"/>
            </div>
            <time dateTime={sunset}>{sunsetTime}</time>
          </div>
        </div>
      </Card>
    </Fade>
  );
}

export default Sun;
