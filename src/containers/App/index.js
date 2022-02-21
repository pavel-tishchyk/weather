import {useEffect} from "react";
import {connect} from "react-redux";
import './styles.scss';
import Header from "../../components/Header";
import Weather from "../../components/Weather";
import {getLocationData} from "../../actions/weather";

function App({locationData, getLocationData}) {
  useEffect(() => {
    getLocationData()
  },[getLocationData])

  return (
    <div className="App">
      <Header/>
      {
        !!locationData
          ?<Weather locationData={locationData}/>
          :<div className="loader">Search your city...</div>
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  locationData: state.weather.locationData
})

const mapDispatchToProps = {
  getLocationData
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
