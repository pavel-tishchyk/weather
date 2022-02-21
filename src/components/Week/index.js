import React from "react";
import './styles.scss';
import Card from "../Card";
import moment from "moment";
import {getWeatherCondition, getWeatherIconPath} from "../../utils";
import Fade from "../Fade";

function Week({daily}) {
  const { temperature_2m_max, temperature_2m_min, time, weathercode, sunrise, sunset } = daily;
  const getWeekDayName = (date) => (moment(date).format('ddd'))

  const cards = time.map((date, index) =>{
    const transitionKey = `${date}-${weathercode}`;
    const weatherIconPath = getWeatherIconPath(weathercode[index], date, sunrise[index], sunset[index])
    const weatherCondition = getWeatherCondition(weathercode[index]);

    return (
      <Fade key={index} transitionKey={transitionKey}>
        <Card title={getWeekDayName(date)} className="animate__animated">
          <img className="card-image"
               src={weatherIconPath}
               alt={weatherCondition}/>
          <div className="card-body">
            <p className="card-text">{Math.round(temperature_2m_max[index])}°</p>
            <p className="card-text">{Math.round(temperature_2m_min[index])}°</p>
          </div>
        </Card>
      </Fade>
    )
  })

  return (
    <section className="week">
        {cards}
    </section>
  );
}

export default Week
