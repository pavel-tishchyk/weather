import React from "react";
import './styles.scss';
import {connect} from "react-redux";
import {setTemperatureUnit} from "../../actions/weather";

function Navigation({temperatureUnit, setTemperatureUnit}) {
  return (
    <nav className="navigation">
      <div className="time">
        <button>Today</button>
        <button className="active">Week</button>
      </div>
      <div className="scale">
        <button
          className={temperatureUnit === "celsius" ? "active" : undefined}
          onClick={() => setTemperatureUnit("celsius")}
        >
          °C
        </button>
        <button
          className={temperatureUnit === "celsius" ? undefined : "active"}
          onClick={() => setTemperatureUnit("fahrenheit")}
        >
          °F
        </button>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  temperatureUnit: state.weather.temperatureUnit
})


const mapDispatchToProps = {
  setTemperatureUnit
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
